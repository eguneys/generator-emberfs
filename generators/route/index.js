'use strict';
var util = require('util');
var path = require('path');

var genUtils = require('../../util.js');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EmberFullstackRouteGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.argument('arg_path', { type: String, defaults: '', banner: 'path' });
        
        this.option('lazy-load', {
            desc: 'Use lazy loader mixin',
            type: Boolean,
            defaults: false
        });

        this.option('skip-inject', {
            desc: 'Skip route inject to router.js',
            type: Boolean,
            defaults: false
        });
    },

    generate: function() {
        var slugName = this._.slugify(this.name);

        if (!this.options['lazy-load']) {

            this.template('base.js', 'app/client/scripts/routes/' + slugName + '_route.js');
            
        } else {

            this.deps = ['templates/' + slugName];
            
            this.template('base_lazy.js', 'app/client/scripts/routes/' + slugName + '_route.js');
            this.template('deps.js', 'app/client/scripts/routes/' + slugName + '_deps.js');

        }
    },

    generateTemplateFile: function() {

        var slugName = this._.slugify(this.name);
        
        this.copy('base_template.hbs', 'app/client/templates/' + slugName + '.hbs');

        if (this.options['lazy-load']) {
            this.mkdir('app/client/templates/' + slugName);
            this.copy('index_template.hbs', 'app/client/templates/' + slugName + '/index.hbs');
        }
    },

    injectRoute: function() {
        if (this.options['skip-inject']) { return; }

        this.arg_path = this.arg_path.replace(/"/g, '');
        
        var slugName = this._.slugify(this.name),
            routeFile,
            inRouteText = this.arg_path?
                "'" + slugName + "', { path: '" + this.arg_path + "' }":
                "'" + slugName + "'";

        try {

            routeFile = this.readFileAsString('app/client/scripts/router.js');
        } catch(e) {

            var done = this.async();
            
            this.prompt({
                type: 'confirm',
                name: 'routerFile',
                message: "You don't have a router.js file, would you like to create one?",
                default: false
            }, function(answer) {
                this.includeRouterFile = answer.routerFile;
                done();
            }.bind(this));
            
            return;
        }
        
        // https://github.com/stefanpenner/ember-cli/blob/master/blueprints/route/index.js
        routeFile = routeFile.replace(
                /(map\(function\(\) {[\s\S]+?)\n {4}\}\)/,
            "$1\n        this.route(" + inRouteText + ");\n    \})");

        routeFile = routeFile.replace(
            /(define\(\[[\s\S]+?)[\s]?\], function/,
            "$1, 'routes/" + slugName + "_route'\], function");
        
        this.writeFileFromString(routeFile, 'app/client/scripts/router.js');
    },

    injectRequireJSConfig: function() {
        if (this.options['skip-inject'] || !this.options['lazy-load']) { return; }
        
        var slugName = this._.slugify(this.name),
            gulpFile,
            moduleText = 'routes\/' + slugName + '_deps';

        try {

            gulpFile = this.readFileAsString('gulpfile.js');
        } catch(e) {

            var done = this.async();
            this.log(chalk.red('Cannot read gulpfile.js.\n'));
            return;
        }
        
        // https://github.com/stefanpenner/ember-cli/blob/master/blueprints/route/index.js
        
        gulpFile = gulpFile.replace(/(gulp.task\('build-requirejs',[\s\S]*modules: \[[\s\S]+?)[\s]+\]/,
        "$1,\n            \{\n                name: '" + moduleText + "',\n                exclude: \['app\/common']\n            }\n        ]");
        
        this.writeFileFromString(gulpFile, 'gulpfile.js');
    },

    generateRouterFile: function() {
        
        if (this.includeRouterFile) {
            
            this.template('base_router.js',
                          'app/client/scripts/router.js');
            
        }
    }
    
});

module.exports = EmberFullstackRouteGenerator;
