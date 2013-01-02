'use strict';

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
