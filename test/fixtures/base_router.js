define(['app/app'], function(App) {
    
    App.Router.map(function() {
        this.resource('guides', function() {
            this.route('guide', { path: '/:guide_id' });
        });
        this.route('catchall', { path: '/*wildcard'});
    });

    App.Router.reopen({
        location: 'history'
    });
    
});
