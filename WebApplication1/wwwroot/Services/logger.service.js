(function (undefined) {

    "use strict";

    var module = angular.module("menu-index");

    module.service('mealLogger', MealLogger);

    function LoggerBase() {

    }

    LoggerBase.prototype.output = function (message) {
        console.log('Logger Base: ' + message);
    }


    function MealLogger() {
        LoggerBase.call(this);

        this.LogMeal = function (dish, meal) {
            console.log('Meal: ' + dish.Name + ' Changed: ' + meal)
        }
    }

    MealLogger.prototype = Object.create(LoggerBase.prototype);

})();