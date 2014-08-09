/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs:test generator', function () {
    
    var defaultOptions = {
    };

    var defaultArgs = 'FirstTest';

    var defaultExpectedFiles = [
        'tests/integration/firsttest-test.coffee'
    ];

    beforeEach(function() {
        this.timeout(10000);
        this.app_test = helpers
            .run(path.join(__dirname, '../generators/test'))
            .inDir(path.join(__dirname, '.tmp'));
    });

    describe('with default options', function() {
        it('should generate expected files', function(done) {
            this.app_test.withPrompt(defaultOptions)
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file(defaultExpectedFiles);

                    assert.fileContent('tests/integration/firsttest-test.coffee', /module 'Integration: Firsttest', {/);
                    
                    done();
                });
        });
    });

    describe('with --js option', function() {
        it('should generate expected files', function(done) {
            this.app_test.withPrompt(defaultOptions)
                .withOptions({'js':true})
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file('tests/integration/firsttest-test.js');

                    assert.fileContent('tests/integration/firsttest-test.js', /module\('Integration: Firsttest', {/);
                    
                    done();
                });
        });
    });
});
