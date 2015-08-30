var app = angular.module('mainApp', ['ngMaterial']);

	app.controller('sidemenuCtrl', 
		function($scope, $mdSidenav){
			$scope.toggleLeft = function () {
				$mdSidenav('left').toggle();
			}
	});
