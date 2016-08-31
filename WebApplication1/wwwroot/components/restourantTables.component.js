(function () {
	"use strict";

	var module = angular.module("menu-index");

	function fetchOrders($http) {
		return $http.get("http://localhost:58415/orders/returnactiveorders")
                        .then(function (response) {
                        	return response.data;
                        })
	}


	function controller($http) {
		var model = this;
        var statuses = ["Ordered", "Ready", "Served"]
		model.tables = new Array(12);
		model.orders = [];

		model.$onInit = function () {
			for (var i = 0; i < 12; i++) {
				var table = {};
				table.id = i + 1;
				model.tables[i] = table;
			}
			fetchOrders($http).then(function (orders) {
				model.orders = orders;
			});
		}
		
		model.retriveOrder = function (tableId) {
		    

		    return model.orders.filter(function (item) {
		        return item.TableNumber == tableId;
		    })[0];


			//for (var i = 0; i < model.orders.length; i++) {
			//	if (model.orders[i].TableNumber == tableId) {
			//		return model.orders[i];
			//	}
			//}
			//return null;
		}

		model.updateStatus = function (statusId, tableId) {
		    var order = model.retriverOrder(tableId);
		    order.Status = statusId;
		}

		model.getStatus = function (order) {

		    return statuses[order.Status - 1];
		}


	}

	module.component("restourantTable", {
	    templateUrl: "/AngularViews/restourantTables.html",
	    $routeConfig: [
            { path: "/thisrouteisnotneeded", component: "showOrder", name: "ThisRouteIsNotNeeded" }
	    ],
	    bindings: { $router: '<' },
		controllerAs: "model",
		controller: ["$http", controller]
	});


}());