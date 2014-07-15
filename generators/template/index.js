'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackTemplateGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.option('partial', {
            desc: 'Is partial template',
            type: Boolean,
            defaults: false
        });
    },

    generate: function() {
        var slugName = this._.slugify(this.name);

        if (this.options['partial']) {
            slugName = '_' + slugName;
        }
        
        this.template('base.js', 'app/client/templates/' + slugName + '.hbs');        
    }
});

module.exports = EmberFullstackTemplateGenerator;
