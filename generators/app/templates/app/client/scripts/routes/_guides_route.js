define(['ember', 'app/app', 'mixins/lazy_loader_mixin'], function(Ember, App) {
    App.GuidesRoute = Ember.Route.extend(App.LazyLoaderMixin, {
        requireLists: ['routes/guides_deps'],

        model: function() {
            return this.store.find('guide');
        },

        actions: {
            error: function(error, transition) {
                if (error) {
                    return this.transitionTo('guides');
                }
                return true;
            }
        }
    });
});
