'use strict';

describe("Entradas Service", function() {

    var Entradas;

    beforeEach(function(){
        module('gruntExample');
    });

    beforeEach(inject(function(_Entradas_) {
        Entradas = _Entradas_;
    }));

    it("me trae las entradas", function() {
        expect(Entradas.getEntradas()).toEqual(["entrada 1", "entrada 2", "entrada 3"]);
    });

    it("me agrega entradas nuevas", function() {
        Entradas.agregarEntrada("nueva Entrada")
        
        expect(Entradas.getEntradas()).toEqual(["entrada 1", "entrada 2", "entrada 3", "nueva Entrada"]);
    });

    it("me agrega entradas nuevas (mockeando)", function() {
        var entradasMockeadas = [];
        spyOn(Entradas, "getEntradas").and.returnValue(entradasMockeadas);

        Entradas.agregarEntrada("nueva Entrada")
        
        expect(Entradas.getEntradas()).toEqual(["nueva Entrada"]);
    });
});






///////////////////////////////////////////////////////////////////////////


describe("BarCtrl", function() {

    var scope, controller, Entradas;
    var entradasMockeadas = ["a", "b", "c"];

    beforeEach(function(){
        module('gruntExample')
    });

    beforeEach(inject(function($controller, $rootScope, _Entradas_) {
        Entradas = _Entradas_;
        spyOn(Entradas, "getEntradas").and.returnValue(entradasMockeadas);
        spyOn(Entradas, "agregarEntrada");
        
        scope = $rootScope.$new();
        controller = $controller('BarCtrl', { $scope: scope });

    }));

    it("se inicializa con las entradas que saca del servicio", function() {
        expect(scope.entradas).toEqual(entradasMockeadas);
    });

    it("llama al servicio para actualizar las entradas", function() {
        scope.nuevaEntrada = "una entrada";
        scope.agregarEntrada();
        expect(Entradas.agregarEntrada).toHaveBeenCalledWith("una entrada");
        expect(scope.nuevaEntrada).toEqual("");
    });
});