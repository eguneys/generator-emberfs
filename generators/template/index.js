'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackTemplateGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        
    },

    generate: function() {
        var slugName = this._.slugify(this.name);
        
        this.template('base.js', 'app/client/templates/' + slugName + '.hbs');
    }
});

module.exports = EmberFullstackTemplateGenerator;
