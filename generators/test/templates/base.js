define(['app/app'], function(App) {
    module('Integration: <%= _.classify(name) %>', {
        setup: function() {
            App.reset();
        },
        teardown: function() {
        }
    });
    
    test('First Test', function() {
        expect(1);

        equal(1, 1, 'should pass');
    });
});
