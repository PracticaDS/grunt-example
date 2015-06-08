'use strict';

application.factory('Entradas', function() {
  var servicioDeEntradas = {};

  servicioDeEntradas.entradas = ["entrada 1", "entrada 2", "entrada 3"];

  servicioDeEntradas.getEntradas = function(){
    return servicioDeEntradas.entradas;
  }

  servicioDeEntradas.agregarEntrada = function(entrada){
    servicioDeEntradas.getEntradas().push(entrada);
  };

  return servicioDeEntradas;
});

application.controller('BarCtrl', ['$scope', '$routeParams', 'Entradas', function($scope, $routeParams, Entradas) {
	$scope.barId = $routeParams.barId;

    $scope.entradas = Entradas.getEntradas();

    $scope.agregarEntrada = function(){
        Entradas.agregarEntrada($scope.nuevaEntrada);
        $scope.nuevaEntrada = "";
    }
}]);