define(['ember', 'app/app', 'mixins/lazy_loader_mixin'], function(Ember, App) {

    App.<%= _.classify(name) %>Route = Ember.Route.extend(App.LazyLoaderMixin, {
        requireLists: ['routes/<%= _.slugify(name) %>_deps']
    });
});
