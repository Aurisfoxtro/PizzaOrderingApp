using POApp.Models;
using Microsoft.EntityFrameworkCore;

namespace POApp.Db
{
    public class POAPPContext: DbContext
    {
        public POAPPContext(DbContextOptions<POAPPContext> options): base(options)
        {

        }
        public DbSet<Pizza> Pizzas { get; set;}
    }
}