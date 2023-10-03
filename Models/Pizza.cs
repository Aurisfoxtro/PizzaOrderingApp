using System;
using System.Drawing;

namespace POApp.Models
{
    public class Pizza
    {
        public int Id { get; set;}
        public string Size { get; set;}
        public string[] Ingredients { get; set;}
        public float Price { get; set;}
    }
}