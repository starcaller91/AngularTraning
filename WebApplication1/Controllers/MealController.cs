using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WebApplication1.Repositories;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.Controllers
{
    public class MealController : Controller
    {
        IMealRepository MealRepository;
        IMenuRepository MenuRepository;

        public MealController(IMealRepository MealRepository, IMenuRepository MenuRepository) {
            this.MealRepository = MealRepository;
            this.MenuRepository = MenuRepository;
        }


        [HttpGet]
        public JsonResult ReturnAllMeals()
        {
            ICollection<Meal> menu = MealRepository.ReturnAllAvailableMealsForMenu(MenuRepository.ReturnMenuForDay((int)DateTime.Now.DayOfWeek));

            return Json(menu);
        }

    }
}
