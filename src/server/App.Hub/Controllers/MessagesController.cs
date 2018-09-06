using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace App.Hub.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        private readonly IHubContext<NotifyHub, IHubClient> _hubContext;

        public MessagesController(IHubContext<NotifyHub, IHubClient> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Message message)
        {
            _hubContext.Clients.All.BroadcastMessage(message.Type, message.Payload);
            return Accepted();
        }
    }
}