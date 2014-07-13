define(['ember', 'app/app'], function(Ember, App) {
    App.LazyLoaderMixin = Ember.Mixin.create({
        requireLists: [],

        beforeModel: function() {
            var toRequire = this.get('requireLists');
            return new Ember.RSVP.Promise(function(resolve, reject) {
                require(toRequire, function() {
                    resolve();
                });
            });
        }
    });
});
