'use strict';

var myApp = angular.module('freeApp', [
	'ngRoute',
	'firebase',
	'freeApp.home',
	'freeApp.about',
	'freeApp.postProject',
	'freeApp.register',
	'freeApp.login'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

