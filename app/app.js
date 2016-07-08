'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('freeApp', [
  'ngRoute',
  'freeApp.home',
  'freeApp.about'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

