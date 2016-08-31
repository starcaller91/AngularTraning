(function () {
    "use strict";

    var module = angular.module("menu-index");

    module.component("menu", {
        templateUrl: "/AngularViews/menu.html",
        controllerAs: "model",
        controller: ["$http", "utilService", "mealLogger", "menuService", "$cookies", "$cookieStore", controller]
    });


    function fetchMeals($http){
        return $http.get("http://localhost:58415/meal/returnallmeals")
                        .then(function(response){
                            return response.data;
                        })
    }



    function controller($http, utilService, mealLogger, menuService, $cookies, $cookieStore) {

        var model = this;

        model.errorMessage = "";
        model.selectedDropdownMeal = null;
        model.selectedDropdownMealName = " - Select item - ";

        model.$onInit = function () {

            menuService.returnMenuForToday()
                .then(returnMenuSuccess)
                .catch(returnError);


            fetchMeals($http).then(function (Meals) {
                model.meals = Meals;
            });
            model.dayOfTheWeek = utilService.CurrentDate;

            mealLogger.output('Meal component initialized');
        }




        model.changeStateOfMeal = function (item, meal) {
            switch(meal){
                case 'breakfast':
                    item.Breakfast = !item.Breakfast;
                    break;
                case 'lunch':
                    item.Lunch = !item.Lunch;
                    break;
                case 'dinner':
                    item.Dinner = !item.Dinner;
                    break;
            }
            mealLogger.LogMeal(item.Meal, meal);
        }

        model.addMealToMenu = function (meal) {
            menuService.addItemToMenu(meal)
                .then(function (Menu) {
                    var index = model.meals.indexOf(meal);
                    model.meals.splice(index, 1);
                    model.selectedDropdownMeal = null;
                    model.selectedDropdownMealName = " - Select item - ";
                    angular.copy(Menu, model.menu);
                })
                .catch(returnError);
        }


        model.removeFromMenu = function (item) {
            menuService.removeItemFromMenu(item.id)
                .then(function (Menu) {
                    model.menu = Menu;
                    model.meals.push(item.Meal);
                })
                .catch(returnError)
        }


        model.MealsDropdownSelect = function (meal) {
            if (meal == null) {
                model.selectedDropdownMeal = null;
                model.selectedDropdownMealName = " - Select item - ";
            }
            else {
                model.selectedDropdownMeal = meal;
                model.selectedDropdownMealName = meal.Name;
            }

        }

        function returnMenuSuccess(Menu) {
            model.menu = Menu;
        }

        function returnError(error) {
            console.log('Controller error: ' + error);
        }
    }


}());