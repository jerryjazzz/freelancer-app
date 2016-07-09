'use strict';

angular.module('freeApp.postProject', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/post-project', {
		templateUrl: 'views/post-project/post-project.html',
		controller: 'postProjectCtrl'
	});

}])

.controller('postProjectCtrl', [function(){

	console.log('postProjectCtrl');

}]);