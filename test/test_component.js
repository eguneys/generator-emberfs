/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs:component generator', function () {
    
    var defaultOptions = {
    };

    var defaultArgs = 'Test-test';
    
    beforeEach(function() {
        this.timeout(10000);
        this.app_template = helpers
            .run(path.join(__dirname, '../generators/component'))
            .inDir(path.join(__dirname, '.tmp'));
    });


    it('should generate expected files', function(done) {
        this.app_template.withPrompt(defaultOptions)
            .withArguments(defaultArgs)
            .on('end', function() {

                assert.file([
                    'app/client/scripts/components/test-test.js',
                    'app/client/templates/components/test-test.hbs',
                    'tests/unit/components/test-test-test.js'
                ]);

                assert.fileContent(
                    'app/client/scripts/components/test-test.js',
                    /TestTestComponent = Ember\.Component/
                );

                assert.fileContent(
                    'tests/unit/components/test-test-test.js',
                    /define\(\['components\/test\-test'\], /
                );

                assert.fileContent(
                    'tests/unit/components/test-test-test.js',
                    /moduleForComponent\('component:test\-test', 'TestTest Component', \{/
                );

                done();
            });
    });
});
