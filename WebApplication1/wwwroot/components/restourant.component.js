(function () {
    "use strict";

    var module = angular.module("menu-index");

    function controller(appInfo, $log) {
        console.log(appInfo.Name);
        console.log(appInfo.Description);

        $log.log('Testing log');
        $log.info('Testing log');
        $log.warn('Testing log');
        $log.error('Testing log');
        $log.debug('Testing log');
    }

    module.component("restourant", {
        templateUrl: "/AngularViews/restourant.html",
        $routeConfig: [
            { path: "/menu", component: "menu", name: "Menu", useAsDefault: true},
            { path: "/tables", component: "restourantTable", name: "Table" },
            { path: "/tables/:id", component: "showOrder", name: "Order" }

        ],
        controllerAs: "model",
        controller: ["appInfo", "$log", controller]
    });


}());