/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('emberfs:template generator', function () {
    
    var defaultOptions = {
    };

    var defaultArgs = 'Test';
    
    beforeEach(function() {
        this.timeout(10000);
        this.app_template = helpers
            .run(path.join(__dirname, '../generators/template'))
            .inDir(path.join(__dirname, '.tmp'));
    });


    it('should generate expected files', function(done) {
        this.app_template.withPrompt(defaultOptions)
            .withArguments(defaultArgs)
            .on('end', function() {

                assert.file([
                    'app/client/templates/test.hbs'
                ]);

                done();
            });
    });

    describe('with --partial=true', function() {
        
        it('should generate expected files', function(done) {
            this.app_template.withPrompt(defaultOptions)
                .withArguments(defaultArgs)
                .withOptions({partial:true})
                .on('end', function() {

                    assert.file([
                        'app/client/templates/_test.hbs'
                    ]);

                    done();
                });
        });
    });
});
