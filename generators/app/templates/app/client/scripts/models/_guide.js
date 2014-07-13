define(['ember-data', 'app/app'], function(DS, App) {
    App.Guide = DS.Model.extend({
        title: DS.attr('string'),
        body: DS.attr('string')
    });

    App.Guide.FIXTURES = [
        {
            id: '1',
            title: 'Getting Started',
            body: 'Install packages with bower, and start using them in code'
        },
        {
            id: '2',
            title: 'LiveReload',
            body: 'Watch changes live on browser when you save your code'
        },
        {
            id: '3',
            title: 'AMD',
            body: 'Organize your code in modules, in well structured architecture'
        },
        {
            id: '4',
            title: 'Deploy',
            body: 'Optimize your assets with RequireJS, ready for production'
        },
        {
            id: '5',
            title: 'Precompiled, Lazy Loaded',
            body: 'Templates are precompiled, and scripts are lazy loaded'
        },
        {
            id: '6',
            title: 'Cachebust',
            body: 'Assets are fingerprinted, cache your assets until the next change'
        }
    ];
});
