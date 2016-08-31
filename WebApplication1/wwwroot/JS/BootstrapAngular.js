(function () {
    "use strict";
    var module = angular.module("menu-index", ["ngComponentRouter", "ngCookies"]);

    //register a service, and set top level component
    module.value("$routerRootComponent", "restourant");



}());