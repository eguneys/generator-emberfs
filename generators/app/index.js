'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EmberFullstackGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.argument('name', { type: String, required: false });
        this.appname = this.name || path.basename(process.cwd());
        
        this.appPath = this.env.options.appPath;
        
        this.pkg = require('../../package.json');
    },

    info: function() {
        this.log(this.yeoman);
        this.log(chalk.yellow(
            'Out of the box I create an EmberJS app, RequireJS with an Express server.\n' +
                'gulpfile.js to build your app.\n'
        ));
    },

    clientPrompts: function() {
        if (this.skipConfig) return;
        var done = this.async();

        this.log('# Client\n');

        var prompts = [
        ];

        this.prompt(prompts, function(props) {
            
            done();
        }.bind(this));
    },

    serverPrompts: function() {
        if (this.skipConfig) return;
        var done = this.async();

        this.log('# Server\n');

        var prompts = [
        ];

        this.prompt(prompts, function(props) {
            
            done();
        }.bind(this));
    },

    generateBasic: function() {
        // git
        this.template('gitignore', '.gitignore');
        // jshint
        this.copy('jshintrc', '.jshintrc');
        // bowerrc
        this.copy('bowerrc', '.bowerrc');
        // packageJSON
        this.template('_package.json', 'package.json');
        // bower
        this.copy('_bower.json', 'bower.json');
        // gulpfile
        this.template('gulpfile.js');
    },

    generateClient: function() {
        
    },
    
    generateServer: function() {

    },

    end: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});

module.exports = EmberFullstackGenerator;
