'use strict';

angular.module('freeApp.login', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl: 'views/login/login.html',
		controller: 'loginCtrl'
	});

}])

.controller('loginCtrl', ['$scope', 'firebaseService', '$firebaseArray', '$window', '$rootScope', function($scope, firebaseService, $firebaseArray, $window, $rootScope){
	console.log('Login Controller');
	var ref = new Firebase(firebaseService.firebaseUrl());
	
	$scope.loginWithUs = function(){
        var loginEmail = $scope.loginEmail;
        var loginPassword = $scope.loginPassword;

        
        ref.authWithPassword({
            email    : loginEmail,
            password : loginPassword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            }
            else {
                var refe = new Firebase('https://freetype-app.firebaseio.com');
                console.log("Authenticated successfully with payload:", authData);
                $window.location.href="#/post-project";
                var user = refe.getAuth();
                if(user != null){
                    $rootScope.logged = 'loggedIn';
                }
                else{
                    $rootScope.logged = 'loggedOut';
                }
            }
        });

    }


}]);