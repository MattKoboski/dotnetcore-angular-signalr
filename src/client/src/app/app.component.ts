import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message } from 'primeng/api';
import webNotification from 'simple-web-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private connection: HubConnection;
  private messages: Message[] = [];

  ngOnInit(): void {
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/notifications')
      .build();
    this.connection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(() => console.log('Error while establishing connection :('));

    // this.connection.on('BroadcastMessage', (type: string, payload: string) => {
    //   this.messages.push({ severity: type, summary: payload });
    // });

    this.connection.on('BroadcastMessage', (type: string, payload: string) => {
      webNotification.showNotification(type, {
        body: payload,
        onClick: () => { console.log('clicked!'); },
        autoClose: 7000
      });
    });
  }
}
