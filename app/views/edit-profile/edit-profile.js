'use strict';

angular.module('freeApp.editProfile', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/edit-profile', {
		templateUrl: 'views/edit-profile/edit-profile.html',
		controller: 'editprofileCtrl'
	});

}])

.controller('editprofileCtrl', ['$scope', 'firebaseService', '$firebaseArray','$location','$window', function($scope, firebaseService, $firebaseArray, $location, $window){

	console.log('Edit Profile Controller');
    var ref = new Firebase(firebaseService.firebaseUrl());

    $scope.savePersonalProfile = function(){
        var studentProfileTable = new Firebase(firebaseService.firebaseUrl()+'/studentProfile');
        studentProfileTable.push({name:personal.firstName, dateOfBirth:personal.dateofBirth, gender:personal.gender, bloodGroup:personal.bloodGroup, birthPlace:personal.birthPlace, nationality:personal.nationality, motherTongue:personal.motherToungue, religion:personal.religion}).then(function(){
            alert('Successfull..!!');
        })
    }

}]);