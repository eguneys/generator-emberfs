define(['ember', 'app/app', 'mixins/lazy_loader_mixin'], function(Ember, App) {

    App.IndexRoute = Ember.Route.extend(App.LazyLoaderMixin, {
        requireLists: ['routes/index_deps'],
        
        model: function() {
            return this.store.find('feature');
        },
        setupController: function(controller, model) {
            model = model.reduce(function(arr, obj, index) {
                if (index % 2 === 0) {
                    arr.pushObject(Ember.A([obj]));
                } else {
                    arr.get('lastObject').push(obj);
                }
                return arr;
            }, Ember.A());
            controller.set('model', model);
        }
    });
});
