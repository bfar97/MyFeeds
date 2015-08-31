var app = angular.module('mainApp', ['ngMaterial']);

	app.controller('sidemenuCtrl', 
		function($scope, $mdSidenav){
			$scope.toggleLeft = function () {
				$mdSidenav('left').toggle();
			}
	});









var facebookLogin = angular.module ('fblogin', ['facebook']);

	facebookLogin.config(['FacebookProvider', function (FacebookProvider) {

		var appID = '860444644004972';

		FacebookProvider.init(appID);
	}]);

	facebookLogin.controller('loginfbCtrl', ['$scope', '$timeout', 'Facebook', function($scope, $timeout, Facebook){

		$scope.user = {};

		$scope.logged = false;

		$scope.byebye = false;
		$scope.salutation = false;

		$scope.$watch(
			function () {
				return Facebook.isReady();
				},
				function (newVal) {
					$scope.facebookReady = true;
				}
			);

		var userIsConnected = false;
		
		$scope.login = function () {

			Facebook.login(function (response) {
				if (response.status === 'connected') {
					$scope.logged = true;
					$scope.me();
				};
			});
		};

		$scope.getLoginStatus = function () {

			Facebook.getLoginStatus(function (response) {
				if (response.status === 'connected') {
					$scope.userIsConnected = true;
				}
			});
		};

		$scope.intentLogin = function () {
			if (!userIsConnected) {
				$scope.login();
			}
		};

		$scope.me = function () {
			Facebook.api('/me', function (response) {
				$scope.$apply(function () {
					$scope.user = response;
				});
			});
		};

		$scope.logout = function () {
			Facebook.logout(function () {
				$scope.$apply(function () {
					$scope.logged = false;
					$scope.user   = {};
				});
			});
		};

	}]);