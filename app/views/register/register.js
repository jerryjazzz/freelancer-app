'use strict';

angular.module('freeApp.register', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/register', {
		templateUrl: 'views/register/register.html',
		controller: 'registerCtrl'
	});

}])

.controller('registerCtrl', ['$scope', 'firebaseService', '$firebaseArray','$location','$window', function($scope, firebaseService, $firebaseArray, $location, $window){

	console.log('Register Controller');
	// console.log(firebaseService.firebaseUrl('userTable'));

	$scope.getRegistration = function(){

		var getEmail = $scope.registerEmail;
		var getPassword = $scope.registerPassword;

		alert(getEmail);

		var ref = new Firebase(firebaseService.firebaseUrl());

		ref.createUser({
            email    : getEmail,
            password : getPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            }
            else {
                console.log("Successfully created user account with uid:", userData.uid);
                $window.location.href = '#/login';
            }
        });

	}

}]);