'use strict';

/*
describe('tabman', function(){
    describe('main view', function(){
        beforeEach(function() {
           browser().navigateTo('http://localhost/tabman');
        });
        it('should print all the tabs', function(){
            expect(element('//tr/td[1]').text()).
                toMatch(/Creep, interpreted by Radiohead/);
        });
    });
});
*/

describe('TabManController', function(){
    var ctrl;
    var scope;

    beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller('TabManController', {
            $scope: scope
        })
    }));


    it('should set tabs list', function() {
        expect(scope.allTabs.length).toBe(3);
    });
});
