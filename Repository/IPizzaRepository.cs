using System.Collections.Generic;
using System.Threading.Tasks;
using POApp.Models;

namespace POApp.Repository
{
    public interface IPizzaRepository
    {
        public Task<IEnumerable<Pizza>> SelectAllPizzas();
        public Task<Pizza> SelectPizza(int id);
        public Task<string> UpdatePizza(int id, Pizza pizza);
        public Task<string> SavePizza(Pizza pizza);
        public Task<string> DeletePizza(int id);
    }
}