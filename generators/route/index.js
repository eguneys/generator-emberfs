'use strict';
var util = require('util');
var path = require('path');

var genUtils = require('../../util.js');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EmberFullstackRouteGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        
    },

    generate: function() {
        var slugName = this._.slugify(this.name);
        
        this.template('base.js', 'app/client/scripts/routes/' + slugName + '_route.js');

        this.template('deps.js', 'app/client/scripts/routes/' + slugName + '_deps.js');
    }
});

module.exports = EmberFullstackRouteGenerator;
