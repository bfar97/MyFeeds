var app = angular.module('mainApp', ['ngMaterial']);

	app.controller('sidemenuCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 
		function($scope, $timeout, $mdSidenav, $mdUtil, $log){
			$scope.toggleleft = buildToggler('left');
			function buildToggler (navID) {
				var debounceFn = $mdUtil.debounce(function () {
					$mdSidenav(navID)
						.toggle()
						.then(function (){
							$log.debug("toggle" + navID + "is done.");
						});
				}, 200);
				return debounceFn;
			}
	}]);

	app.controller('leftCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 
		function($scope, $timeout, $mdSidenav,$mdUtil, $log){
			$scope.close = function () {
				$mdSidenav('left').close()
				.then(function () {
					$log.debug("close left is done.");
				});
			};
		}]);
