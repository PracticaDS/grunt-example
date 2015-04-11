'use strict';

var application = angular.module('gruntExample', ['ngRoute']);

application.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/foo', {
      templateUrl: 'app/views/foo/foo.html',
      controller: 'FooCtrl'
    })
    .when('/bar/:barId', {
      templateUrl: 'app/views/bar/bar.html',
      controller: 'BarCtrl'
    })
}]);