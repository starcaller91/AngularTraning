using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1EF.EF.Context;

namespace WebApplication1.Repositories
{
    public class CategoryRepository
    {
        private RestourantContext context;
        public CategoryRepository(RestourantContext context)
        {
            this.context = context;
        }
    }
}
