# Wprowadzenie
Demo mechanizmu notyfikacji SignalR przy użyciu Angulara 6 i .NET Core 2.2

# Instrukcja instalacji
## Przed uruchomieniem:
-  instalacja sdk-2.2.101 -> https://www.microsoft.com/net/download/dotnet-core/sdk-2.2.101
-  instalacja node -> https://nodejs.org/en/
## W folderze src/server/App.Hub:
- dotnet restore
- dotnet run

## W folderze src/client:
-  npm install
-  npm start

# Demo działania
1. Otwórz aplikację Angular dostępną pod adresem http://localhost:4200
2. Otwórz Swagger UI dostępny pod adresem http://localhost:5000
3. Wybierz dostępny endpoint */api/Messages* 
4. W prawym górnym rogu wybierz *Try it out*
5. Uzupełnij przykładową wiadomość
6. Naciśnij *Execute*
7. Zobacz wiadomość w aplikacji Angular

![Swagger UI](https://github.com/MattKoboski/dotnetcore-angular-signalr/blob/master/docs/swagger.PNG)

## Typy wiadomości
|typ | kolor wiadomości |
| --- | --- |
| `success` | zielony |
| `error` | czerwony |
| `info` | niebieski |