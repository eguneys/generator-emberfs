/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs:controller generator', function () {
    
    var defaultOptions = {
    };

    var defaultArgs = 'Test';
    
    beforeEach(function() {
        this.app_controller = helpers
            .run(path.join(__dirname, '../generators/controller'))
            .inDir(path.join(__dirname, '.tmp'));
    });


    it('should generate expected files', function(done) {
        this.timeout(10000);
        this.app_controller.withPrompt(defaultOptions)
            .withArguments(defaultArgs)
            .on('end', function() {

                assert.file([
                    'app/client/scripts/controllers/test_controller.js',
                    'tests/unit/controllers/test-test.coffee'
                ]);

                assert.fileContent('app/client/scripts/controllers/test_controller.js',
                                   /App.TestController = Ember.ObjectController/);

                assert.fileContent('tests/unit/controllers/test-test.coffee',
                                   /define \['controllers\/test_controller'\], /);
                
                assert.fileContent('tests/unit/controllers/test-test.coffee',
                                   /moduleFor 'controller:test', 'Test Controller', \{/);
                
                done();
            });
    });

    describe("with --js option", function(done) {
        it('should generate javascript test files', function(done) {
            this.timeout(10000);
            this.app_controller.withPrompt(defaultOptions)
                .withOptions({'js':true})
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file([
                        'tests/unit/controllers/test-test.js'
                    ]);
                    
                    assert.fileContent('tests/unit/controllers/test-test.js',
                                   /define\(\['controllers\/test_controller'\], /);
                    
                    done();
                });
        });
    });
});
