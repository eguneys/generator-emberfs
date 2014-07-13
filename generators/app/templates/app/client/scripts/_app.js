define(['ember', 'ember-data'], function(Ember, DS) {
    var App = Ember.Application.create();

    App.ApplicationAdapter = DS.FixtureAdapter.extend();
    
    return App;
});
