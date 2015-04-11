'use strict';

application.controller('BarCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.barId = $routeParams.barId;
}]);