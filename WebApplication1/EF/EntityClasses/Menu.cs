using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.EF.EntityClasses
{
    public class Menu
    {
        public int ID { get; set; }
        public int  Day { get; set; }
        public List<MenuItem> Items { get; set; }
        
    }
}
