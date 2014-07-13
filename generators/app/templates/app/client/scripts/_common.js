requirejs.config({
    //deps: ['app/main'],
    //baseUrl: '/public/assets/scripts/lib',
    paths: {
        app: '../app',
        routes: '../app/routes',
        models: '../app/models',
        views: '../app/views',
        controllers: '../app/controllers',
        mixins: '../app/mixins',
        templates: '../../templates',
        ember: 'ember/ember',
        jquery: 'jquery/dist/jquery',
        requirejs: 'requirejs/require',
        handlebars: 'handlebars/handlebars',
        bootstrap: 'bootstrap-sass-official/assets/javascripts/bootstrap',
        'ember-data': 'ember-data/ember-data'
    },
    shim: {
        ember: {
            deps: [
                'handlebars',
                'jquery'
            ],
            exports: 'Ember'
        },
        'ember-data': {
            deps: [
                'ember'
            ],
            exports: 'DS'
        },
        'bootstrap/transition': {
            deps: [
                'jquery'
            ]
        },
        'bootstrap/collapse': {
            deps: [
                'jquery',
                'bootstrap/transition'
            ]
        }
    },
    packages: [

    ]
});
