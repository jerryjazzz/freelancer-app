'use strict';

angular.module('freeApp.login', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl: 'views/login/login.html',
		controller: 'loginCtrl'
	});

}])

.controller('loginCtrl', ['$scope', 'firebaseService', '$firebaseArray', function($scope, firebaseService, $firebaseArray){
	console.log('Login Controller');
}]);