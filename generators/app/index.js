'use strict';
var util = require('util');
var path = require('path');

var genUtils = require('../../util.js');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EmberFullstackGenerator = yeoman.generators.Base.extend({
    init: function () {
        //this.argument('name', { type: String, required: false });
        //this.appname = this.name || this.appname;
        
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

        this.template('gitignore', '.gitignore');
        this.copy('jshintrc', '.jshintrc');
        this.copy('bowerrc', '.bowerrc');
        this.template('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_testem.json', 'testem.json');
        this.template('gulpfile.js');
    },

    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        
        genUtils.processDirectory(this, 'app/client', 'app/client');

        this.mkdir('app/client/scripts/views');
        this.mkdir('app/client/vendor');

        genUtils.processDirectory(this, 'app/views', 'app/views');

        genUtils.processDirectory(this, 'config', 'config');

        genUtils.processDirectory(this, 'tests', 'tests');
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
