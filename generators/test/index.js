'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackTestGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.argument('arg_path', {type: Array, defaults: [], banner: 'field[:type] field[:type]' });

        this.option('js', {
            desc: 'Use javascript for test (default coffeescript)',
            type: Boolean,
            defaults: false
        });
    },

        
    
    generateCoffee: function() {
        if (this.options['js']) { return; }
        var slugName = this._.slugify(this.name);
        
        this.template('base.coffee', 'tests/integration/' + slugName + '-test.coffee');
    },
    
    generateJs: function() {
        if (!this.options['js']) { return; }
        var slugName = this._.slugify(this.name);
        
        this.template('base.js', 'tests/integration/' + slugName + '-test.js');
    }
});

module.exports = EmberFullstackTestGenerator;
