'use strict';

var myApp = angular.module('freeApp', [
	'ngRoute',
	'firebase',
	'freeApp.home',
	'freeApp.about',
	'freeApp.register',
	'freeApp.login',
	'freeApp.editProfile'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

myApp.controller('appController', ['$scope', '$window', function($scope, $window){

	

}]);

myApp.run(['$rootScope', '$window', function($rootScope, $window){

	var ref = new Firebase('https://freetype-app.firebaseio.com');

	var user = ref.getAuth();
	console.log(user);
	if(user != null){
		$rootScope.logged = 'loggedIn';
	}
	else{
		$rootScope.logged = 'loggedOut';
	}

	$rootScope.unauth = function(){
		ref.unauth();
		var refe = new Firebase('https://freetype-app.firebaseio.com');
        var user = refe.getAuth();
        if(user != null){
            $rootScope.logged = 'loggedIn';
        }
        else{
            $rootScope.logged = 'loggedOut';
        }
		$window.location.href = '#/';
	}

}]);