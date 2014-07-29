'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackComponentGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        
    },

    generate: function() {
        var slugName = this._.slugify(this.name);

        console.log(slugName);
        
        this.template('base.js', 'app/client/scripts/components/' + slugName + '.js');

        this.template('base_template.js', 'app/client/templates/components/' + slugName + '.hbs');

        this.template('_test.js', 'tests/unit/components/' + slugName + '-test.js');
    }
});

module.exports = EmberFullstackComponentGenerator;
