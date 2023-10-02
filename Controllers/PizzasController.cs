using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using POApp.Db;
using POApp.Models;
using POApp.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using POApp;

[Route("api/[controller]")]
public class PizzasController : Controller
{

    private readonly IPizzaService _pizzaService;

    public PizzasController(IPizzaService pizzaService)
    {
        _pizzaService = pizzaService;
    }

    [HttpGet("[action]")]
    public async Task<ActionResult<IEnumerable<Pizza>>> GetPizzas()
    {
        try
        {
             var allpizzas = await _pizzaService.GetPizzas();
             return Ok(allpizzas);
        }
        catch(Exception exp)
        {
            return BadRequest(exp.Message);
        }
        //return await _context.Employees.ToListAsync();
    }

    
    [HttpGet("Pizza/{id}")]
    public async Task<ActionResult<Pizza>> GetPizzaById(int id)
    {
        try
        {
            var pizza = await _pizzaService.GetPizza(id);
            return Ok(pizza);
        }
        catch(Exception exp)
        {
            return BadRequest(exp.Message);
        }
    }

    [HttpPost("AddPizza")]
    public async Task<ActionResult> AddPizza([FromBody]Pizza pizza)
    {
        try
        {
            string result = string.Empty;
            if(pizza != null)
            {
                result = await _pizzaService.AddPizza(pizza);
            }
            return Ok(result);
        }
        catch(Exception exp)
        {
            return BadRequest(exp.Message);
            //
        }
    }

    [HttpPut("EditPizza/{id}")]
    public async Task<ActionResult> EditPizza(int id, [FromBody]Pizza pizza)
    {
        try
        {
            string result = string.Empty;
            result = await _pizzaService.EditPizza(id, pizza);
            return Ok(result);
        }
        catch(Exception exp)
        {
            return BadRequest(exp.Message);
        }
    }

    [HttpDelete("DeletePizza/{id}")]
    public async Task<ActionResult> DeletePizza(int id)
    {
        try
        {
            string result = string.Empty;
            result = await _pizzaService.RemovePizza(id);
            return Ok(result);
        }
        catch(Exception exp)
        {
            return BadRequest(exp.Message);
        }
    }

}