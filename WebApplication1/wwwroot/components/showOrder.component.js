(function () {
	"use strict";

	var module = angular.module("menu-index");

	function fetchOrder($http, id) {
		return $http.post("http://localhost:58415/orders/ReturnOrderForTable", id)
                        .then(function (response) {
                        	return response.data;
                        })
	}


	function controller($http) {
		var model = this;

		model.$routerOnActivate = function (next, previous) {
			model.id = next.params.id;

			fetchOrder($http, model.id).then(function (order) {
				model.order = order;
			});
		}
        

		model.addItem = function (order, item) {
			if (order.Items == null) {
				order.Items = [];
}
			order.Items.push(item);
		}




	}

	module.component("showOrder", {
	    templateUrl: "/AngularViews/ShowOrder.html",
	    //$canActivate: function (){
	    //    return false;
	    //},
		controllerAs: "model",
		controller: ["$http", controller]
	});


}());

