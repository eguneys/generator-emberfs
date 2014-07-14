'use strict';
var util = require('util');
var path = require('path');

var yeoman = require('yeoman-generator');

var EmberFullstackModelGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.argument('attributes', {type: Array, defaults: [], banner: 'field[:type] field[:type]' });

        this.attrs = this.attributes.map(function(attr) {
            var parts = attr.split(':');

            return {
                name: parts[0],
                type: parts[1] || 'string'
            };
        });
    },

    generate: function() {
        var slugName = this._.slugify(this.name);
        
        this.template('base.js', 'app/client/scripts/models/' + slugName + '_model.js');
    }
});

module.exports = EmberFullstackModelGenerator;
