define(['app/app'], function(App) {
    module('Integration Tests', {
        setup: function() {
        },
        teardown: function() {
            // make sure to call App.reset
            // from the teardown function
            // otherwise Ember fails.
            // (unit tests for component)
            App.reset();
        }
    });
    
    test('Home Index Page', function() {
        expect(1);
        visit('/');

        andThen(function() {
            equal(find('h3').first().text().trim(), 'Setting Up Gulp for Fullstack', 'Heading is ok.');
        });
    });
        
    test('Guides Index Page', function() {
        expect(6);
        visit('/guides');

        andThen(function() {
            equal(find('h3').first().text().trim(), 'Template Guides', 'Heading is ok.');
        });

        click('ul li a[href="/guides/2"]');

        andThen(function() {
            equal(find('h3').first().text().trim(), 'LiveReload', 'Guide links are ok.');
        });

        click('.bottom-navigation .navigate-next');

        andThen(function() {
            equal(find('h3').first().text().trim(), 'AMD', 'Bottom navigation links are ok.');
        });

        click('.bottom-navigation .navigate-next');
        click('.bottom-navigation .navigate-next');
        click('.bottom-navigation .navigate-next');

        andThen(function() {
            equal(find('h3').first().text().trim(), 'Cachebust', 'Last navigation link reached');
            equal(find('.bottom-navigation .navigate-prev').text().trim(), 'Precompiled, Lazy Loaded', 'Prev navigation link exists on last item.');
            equal(find('.bottom-navigation .navigate-next').text(), '', 'Next navigation link doesnt exist on last item.');
        });
    });
});
