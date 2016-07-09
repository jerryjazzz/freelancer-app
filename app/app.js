'use strict';

var myApp = angular.module('freeApp', [
	'ngRoute',
	'freeApp.home',
	'freeApp.about',
	'freeApp.postProject'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);

