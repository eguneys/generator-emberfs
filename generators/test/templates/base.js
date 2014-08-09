define(['app/app'], function(App) {
    module('Integration: <%= _.classify(name) %>', {
        setup: function() {
        },
        teardown: function() {
            // make sure to call app.reset
            // from the teardown function
            // otherwise Ember fails.
            // (unit tests for component)
            App.reset();
        }
    });
    
    test('First Test', function() {
        expect(1);

        equal(1, 1, 'should pass');
    });
});
