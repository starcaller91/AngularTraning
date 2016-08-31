using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.EF.EntityClasses
{
    public class Table
    {
        public int ID { get; set; }
        public Order Order { get; set; }
        public Status Status { get; set; }
    }
}
