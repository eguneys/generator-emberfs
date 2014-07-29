/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs:model generator', function () {
    
    var defaultOptions = {
    };

    var defaultArgs = 'Test name:string zipcode:number address';
    
    beforeEach(function() {
        this.timeout(10000);
        this.app_model = helpers
            .run(path.join(__dirname, '../generators/model'))
            .inDir(path.join(__dirname, '.tmp'));
    });


    it('should generate expected files', function(done) {
        this.app_model.withPrompt(defaultOptions)
            .withArguments(defaultArgs)
            .on('end', function() {

                assert.file([
                    'app/client/scripts/models/test_model.js',
                    'tests/unit/models/test-test.js'
                ]);

                assert.fileContent('app/client/scripts/models/test_model.js', /App.Test = DS.Model/);

                assert.fileContent('app/client/scripts/models/test_model.js',
                                   /{\n {8}name: DS.attr\('string'\),\n {8}zipcode: DS.attr\('number'\),\n {8}address: DS.attr\('string'\)\n {4}\}\);/);
                
                // fixture
                assert.fileContent('app/client/scripts/models/test_model.js', /App.Test.FIXTURES/);

                assert.fileContent('app/client/scripts/models/test_model.js',
                                   /{\n {12}id: '0',\n {12}name: 'foo',\n {12}zipcode: 'foo',\n {12}address: 'foo'\n {8}\}\n/);


                // unit test
                assert.fileContent('tests/unit/models/test-test.js',
                                   /define\(\['models\/test'\], /);
                
                assert.fileContent('tests/unit/models/test-test.js',
                                   /moduleForModel\('model:test', 'Test Model', \{/);
                
                done();
            });
    });
});
