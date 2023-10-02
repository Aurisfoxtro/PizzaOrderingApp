using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using POApp.Models;
using POApp.Repository;

namespace POApp.Services
{
    public class PizzaService : IPizzaService
    {
        IPizzaRepository _pizzaRepository;
        public PizzaService(IPizzaRepository repository)
        {
            _pizzaRepository = repository;
        }

        public async Task<IEnumerable<Pizza>> GetPizzas()
        {
            try
            {
                return await _pizzaRepository.SelectAllPizzas();
            }
            catch(Exception exp)
            {
                throw (exp);
            }
        }

        public async Task<Pizza> GetPizza(int id)
        {
            try
            {
                return await _pizzaRepository.SelectPizza(id);
            }
            catch(Exception exp)
            {
                throw(exp);
            }
        }

        public async Task<string> EditPizza(int id, Pizza pizza)
        {
            try
            {
                return await _pizzaRepository.UpdatePizza(id, pizza);
            }
            catch(Exception exp)
            {
                throw(exp);
            }
        }

        public async Task<string> AddPizza(Pizza pizza)
        {
            try
            {
                return await _pizzaRepository.SavePizza(pizza);
            }
            catch(Exception exp)
            {
                throw(exp);
            }
        }

        public async Task<string> RemovePizza(int id)
        {
            try
            {
                return await _pizzaRepository.DeletePizza(id);
            }
            catch(Exception exp)
            {
                throw(exp);
            }
        }

    }
}