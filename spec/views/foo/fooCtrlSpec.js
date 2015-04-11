'use strict';

describe("FooCtrl", function() {

    var scope, controller;

    beforeEach(function(){
        module('gruntExample')
    });

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('FooCtrl', { $scope: scope });
    }));

    it("fills the foos", function() {
        expect(scope.foos).toEqual(["un foo", "otro foo", "un foo más"]);
    });
});