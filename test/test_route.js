/*global describe, beforeEach, it */
'use strict';
var path = require('path');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;


describe('ember-fullstack:route generator', function () {
    
    var defaultOptions = {
        'lazy-load': false
    };

    var defaultArgs = ['Test'];
    
    beforeEach(function() {
        this.timeout(10000);
        this.app_route = helpers
            .run(path.join(__dirname, '../generators/route'))
            .inDir(path.join(__dirname, '.tmp'));
    });


    describe('with default options', function() {
        it('should generate expected files', function(done) {
            this.app_route
                .withOptions(defaultOptions)
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file([
                        'app/client/scripts/routes/test_route.js'
                    ]);

                    assert.fileContent('app/client/scripts/routes/test_route.js', /App.TestRoute = Ember.Route/);

                    assert.noFileContent('app/client/scripts/routes/test_route.js', /requireLists: \['routes\/test_deps'\]/);

                    assert.noFile([
                        'app/client/scripts/routes/test_deps.js'
                    ]);

                    done();
                });
        });
    });

    describe('with --lazy-load=true', function() {
        it('should generate expected files', function(done) {
            this.app_route
                .withOptions({'lazy-load':true})
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file([
                        'app/client/scripts/routes/test_route.js',
                        'app/client/scripts/routes/test_deps.js'
                    ]);

                    assert.fileContent('app/client/scripts/routes/test_route.js', /App.TestRoute = Ember.Route/);
                    assert.fileContent('app/client/scripts/routes/test_route.js', /requireLists: \['routes\/test_deps'\]/);
                    
                    done();
                });
        });        
    });
});
