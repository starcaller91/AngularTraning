using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.Repositories
{
    public interface IMealRepository
    {
        ICollection<Meal> ReturnAllAvailableMealsForMenu(Menu menu);
        


    }
}
