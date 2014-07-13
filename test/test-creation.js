/*global describe, beforeEach, it, xit */
'use strict';
var path = require('path');
var fs = require('fs-extra');
var exec = require('child_process').exec;

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('ember-fullstack generator', function () {
    var defaultOptions = {
    };

    // function generatorTest(generatorType, name, mockPrompt, callback) {
    //     this.app.run({}, function() {
    //         var efGenerator;
    //         var deps = [path.join('../..', generatorType)];
    //         efGenerator = helpers.createGenerator('ember-fullstack:', generatorType, deps, [name]);

    //         helpers.mockPrompt(efGenerator, mockPrompt);
    //         efGenerator.run([], function() {
    //             callback();
    //         });
    //     });
    // }

    beforeEach(function() {
        this.timeout(100000);
        this.app = helpers
            .run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, '.tmp'));
        //.withGenerators([[helpers.createDummyGenerator(), 'ember-fullstack']]);
    });

    it('should generate expected files', function(done) {
        helpers.mockPrompt(this.app, defaultOptions);

        this.app.on('end', function() {
            assert.file([
                '.gitignore',
                '.jshintrc',
                '.bowerrc',
                'package.json',
                'bower.json',
                'gulpfile.js'
            ]);
            done();
        });
    });

    describe('running app', function() {
        beforeEach(function() {
            this.app.inDir(path.join(__dirname, '.tmp'), function(dir) {
                //node_modules
                fs.copySync(path.join(__dirname, 'fixtures/node_modules'),
                            path.join(dir, 'node_modules'));
                //bower_components
            });
        });
        describe('with default options', function() {
            beforeEach(function() {
                helpers.mockPrompt(this.app, defaultOptions);
            });

            it('should pass jshint', function(done) {
                this.timeout(60000);
                this.app.on('end', function() {
                    exec('gulp jshint', function(error, stdout, stderr) {
                        expect(stdout).to.contain('Finished \'jshint\'');
                        expect(stdout).to.not.contain('problems');
                        
                        done();
                    });
                });
            });
        });
    });

});
