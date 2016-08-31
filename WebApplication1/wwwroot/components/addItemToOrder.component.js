(function () {
    "use strict";

    var module = angular.module("menu-index");

    function controller($http) {
        var model = this;
    }

    module.component("addItemToOrder", {
        templateUrl: "/AngularViews/addItemToOrder.html",
        bindings: {
            tableid: "<",
            addItem: "&"
        },
        controllerAs: "model",
        controller: ["$http", controller]
    });


}());