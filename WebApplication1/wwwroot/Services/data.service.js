(function (undefined) {

    'use strict';

    var module = angular.module("menu-index");

    module.factory('menuService', ['$http', '$q', "$cacheFactory", menuService]);

    function menuService($http, $q, $cacheFactory) {

        return {
            returnMenuForToday: returnMenuForToday,
            removeItemFromMenu: removeItemFromMenu,
            addItemToMenu: addItemToMenu
        }

        function returnMenuForToday() {

            return $http.get("http://localhost:58415/menu/menufortoday", { cache: true })
                .then(returnMenu)
                .catch(returnGetMenuError);

            //return $http({
            //    method: 'GET',
            //    url: 'http://localhost:58415/menu/menufortoday',
            //    cache: true
            //})
            //    .then(returnMenu)
            //    .catch(returnGetMenuError);
        }

        function removeItemFromMenu(id) {
            removeMenuFromCache();
            return $http.delete("http://localhost:58415/Menu/Items/" + id)
                .then(removeItemFromMenuSuccess)
                .catch(removeItemFromMenuError);

            //return $http({
            //    method: 'DELETE',
            //    url: "http://localhost:58415/Menu/Items/" + id
            //})
            //    .then(removeItemFromMenuSuccess)
            //    .catch(removeItemFromMenuError);
        }

        function addItemToMenu(meal) {
            removeMenuFromCache();
            return $http.post("http://localhost:58415/Menu/Items", meal)
                .then(addItemToMenuSuccess)
                .catch(addItemToMenuError);

            //return $http({
            //    method: 'POST',
            //    url: "http://localhost:58415/Menu/Items",
            //    data: meal
            //})
            //    .then(addItemToMenuSuccess)
            //    .catch(addItemToMenuError);
        }

        function removeMenuFromCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove('http://localhost:58415/menu/menufortoday');
        }

        function addItemToMenuSuccess(response) {
            return response.data;
        }

        function addItemToMenuError() {
            return $q.reject('Error adding item to menu. (HTTP status: ' + response.status + ')')
        }

        function removeItemFromMenuSuccess(response){
            return response.data;
        }

        function removeItemFromMenuError() {
            return $q.reject('Error removing item from menu. (HTTP status: '+response.status+')')
        }

        function returnMenu(response) {
            return response.data;
        }

        function returnGetMenuError(response) {
            return $q.reject('Error retrieving menu for today. (HTTP status: '+response.status+')')
        }
    }

})();