using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.EF.EntityClasses
{
    public class OrderItems
    {
        public int ID { get; set; }
        public Meal Meal { get; set; }
        public double Quantity { get; set; }
    }
}
