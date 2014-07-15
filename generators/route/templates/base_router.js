define(['app/app'], function(App) {
    
    App.Router.map(function() {
        this.route('<%= _.slugify(name) %>'<% if (arg_path){ %>, { path: '<%= arg_path %>' }<% } %>);
    });

    App.Router.reopen({
        location: 'history'
    });
    
});
