using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using POApp.Db;
using POApp.Models;
using Microsoft.EntityFrameworkCore;
using POApp;

namespace POApp.Repository
{
    public class EmployeeRepository : IPizzaRepository
    {
        private readonly POAPPContext _context;

        public EmployeeRepository(POAPPContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Pizza>> SelectAllPizzas()
        {
            try
            {
                var allpizzas = _context.Pizzas.ToListAsync();
                return await allpizzas;
            }
            catch (Exception exp)
            {
                throw (exp);
            }
        }

        public async Task<Pizza> SelectPizza(int id)
        {
            try
            {
                var pizza = _context.Pizzas.FindAsync(id);
                return await pizza;
            }
            catch (Exception exp)
            {
                throw (exp);
            }
        }

        public async Task<string> UpdatePizza(int id, Pizza pizza)
        {
            if (id != pizza.Id)
            {
                return "Cannot be updated!";
            }

            _context.Entry(pizza).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return "Data updated successfully!";
            }
            catch (DbUpdateConcurrencyException exp)
            {
                if (!PizzaExists(id))
                {
                    return "Data not found!";
                }
                else
                {
                    throw (exp);
                }
            }
        }

        public async Task<string> SavePizza(Pizza pizza)
        {
            _context.Pizzas.Add(pizza);
            try
            {
                await _context.SaveChangesAsync();
                return "Data saved successfully!";
            }
            catch (Exception exp)
            {
                throw (exp);
            }
        }

        public async Task<string> DeletePizza(int id)
        {
            var pizza = await _context.Pizzas.FindAsync(id);
            if (pizza == null)
            {
                return "Data not found!";
            }

            _context.Pizzas.Remove(pizza);
            await _context.SaveChangesAsync();

            return "Data deleted successfully!";
        }

        private bool PizzaExists(int id)
        {
            return _context.Pizzas.Any(e => e.Id == id);
        }

    }
}