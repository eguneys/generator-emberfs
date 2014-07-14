define(['ember-data', 'app/app'], function(DS, App) {
    App.<%= _.classify(name) %> = DS.Model.extend({
<% _.each(attrs, function(attr, i) { %>        <%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')<% if (i < (attributes.length - 1)) { %>,
<% } %><% }); %>
    });

    // delete below if you don't want fixtures
    App.<%= _.classify(name) %>.FIXTURES = [
        {
            id: '0',
<% _.each(attrs, function(attr, i) { %>            <%= _.camelize(attr.name) %>: 'foo'<%if (i < (attributes.length - 1)) { %>,
<% } %><% }); %>
        }
    ];
});
