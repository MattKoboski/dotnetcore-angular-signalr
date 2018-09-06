using System.Threading.Tasks;

namespace App.Hub
{
    public interface IHubClient
    {
        Task BroadcastMessage(string type, string payload);
    }
}