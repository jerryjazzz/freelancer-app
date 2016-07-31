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

		var getUsername = $scope.registerUsername;
		var getEmail = $scope.registerEmail;
		var getPassword = $scope.registerPassword;
		var getWantto = $scope.registerFor;

		var ref = new Firebase(firebaseService.firebaseUrl());

		ref.createUser({
            email    : getEmail,
            password : getPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            }
            else {
            	if(getWantto == 'admin'){
            		var userTableRef = new Firebase(firebaseService.firebaseUrl()+'/adminTable');
            		userTableRef.push({userId:userData.uid, username:getUsername, email:getEmail});
                	$window.location.href = '#/login';
                }
                else if(getWantto == 'student'){
                	var userTableRef = new Firebase(firebaseService.firebaseUrl()+'/studentTable');
                	userTableRef.push({userId:userData.uid, username:getUsername, email:getEmail});
                	$window.location.href = '#/login';
                }
                else{
                	var userTableRef = new Firebase(firebaseService.firebaseUrl()+'/gurdianTable');
                	userTableRef.push({userId:userData.uid, username:getUsername, email:getEmail});
                	$window.location.href = '#/login';
                }
            }
        });

	}

}]);