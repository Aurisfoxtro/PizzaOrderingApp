using System.Collections.Generic;
using System.Threading.Tasks;
using POApp.Models;

namespace POApp.Services
{
    public interface IPizzaService
    {
        public Task<IEnumerable<Pizza>> GetPizzas();
        public Task<Pizza> GetPizza(int id);
        public Task<string> EditPizza(int id, Pizza pizza);
        public Task<string> AddPizza(Pizza pizza);
        public Task<string> RemovePizza(int id);

    }
}