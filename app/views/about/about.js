'use strict';

angular.module('freeApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {

}]);