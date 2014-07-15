define([<% _.each(deps, function(dep, i) {
        %>'<%= dep %>'<% if (i < (deps.length - 1)) { %>,
        <% } %><% }); %>]);
