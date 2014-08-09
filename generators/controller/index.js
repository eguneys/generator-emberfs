'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackControllerGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.argument('attributes', {type: Array, defaults: [], banner: 'field[:type] field[:type]' });

        this.attrs = this.attributes.map(function(attr) {
            var parts = attr.split(':');

            return {
                name: parts[0],
                type: parts[1] || 'string'
            };
        });

        this.option('js', {
            desc: 'Use javascript for test (default coffeescript)',
            type: Boolean,
            defaults: false
        });
    },

    generate: function() {
        var slugName = this._.slugify(this.name);
        
        this.template('base.js', 'app/client/scripts/controllers/' + slugName + '_controller.js');
    },

    generateCoffeeTest: function() {
        if (this.options['js']) { return; }
        var slugName = this._.slugify(this.name);
    
        this.template('_test.coffee', 'tests/unit/controllers/' + slugName + '-test.coffee');
    },

    generateJsTest: function() {
        if (!this.options['js']) { return; }
        var slugName = this._.slugify(this.name);

        this.template('_test.js', 'tests/unit/controllers/' + slugName + '-test.js');
    }
});

module.exports = EmberFullstackControllerGenerator;
