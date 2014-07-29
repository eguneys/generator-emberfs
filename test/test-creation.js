/*global describe, beforeEach, it, xit */
'use strict';
var path = require('path');
var fs = require('fs-extra');
var exec = require('child_process').exec;

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs generator', function () {
    
    var defaultOptions = {
    };
    
    beforeEach(function() {
        this.app = helpers
            .run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, '.tmp'), function(dir) {
                //node_modulesx
                // fs.copySync(path.join(__dirname, 'fixtures/node_modules'),
                //             path.join(dir, 'node_modules'));
                //bower_components

                // node_modules
                fs.symlinkSync(path.join(__dirname, 'fixtures/node_modules'),
                               path.join(dir, 'node_modules'), 'dir');


                fs.mkdirpSync(path.join(dir, 'app/client'));

                // bower_components
                fs.symlinkSync(path.join(__dirname, 'fixtures/bower_components'),
                               path.join(dir, 'app/client/bower_components'), 'dir');

            });
    });

    describe('running app', function() {

        describe('with default options', function() {

            it('should pass jshint', function(done) {
                this.timeout(20000);
                this.app.withPrompt(defaultOptions)
                    .on('end', function() {
                        console.log('running jshint');
                        exec('gulp jshint', function(error, stdout, stderr) {
                            expect(stdout).to.contain('Finished \'jshint\'');
                            expect(stdout).to.not.contain('problems');
                            
                            done();
                        });
                    });
            });

            it('should pass all client tests', function(done) {
                this.timeout(600000);
                this.app.withPrompt(defaultOptions)
                    .on('end', function() {
                        console.log('running client side tests');
                        exec('gulp test', function(error, stdout, stderr) {
                            expect(stdout).to.match(/# tests\s*3/);
                            expect(stdout).to.match(/# pass\s*3/);
                            expect(stdout).to.match(/# fail\s*0/);
                            done();
                        });
                    });
            });
        });
    });

});
