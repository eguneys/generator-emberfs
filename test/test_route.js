/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var fs = require('fs-extra');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var chai = require('chai');
var expect = chai.expect;

var lessStackTrace = require('../test-util');


describe('emberfs:route generator', function () {
    
    var defaultArgs = ['Test'];

    var defaultExpectedFiles = [
        'app/client/scripts/routes/test_route.js',
        'app/client/templates/test.hbs'
    ];
    
    beforeEach(function() {
        this.timeout(10000);
        this.app_route = helpers
            .run(path.join(__dirname, '../generators/route'))
            .inDir(path.join(__dirname, '.tmp'));
    });
    

    describe('with --skip-inject=true', function() {
        it('should generate expected files', function(done) {
            this.app_route
                .withOptions({'skip-inject':true})
                .withArguments(defaultArgs)
                .on('end', function() {
                    
                    assert.file(defaultExpectedFiles);
                    
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
                .withOptions({'lazy-load':true, 'skip-inject': true})
                .withArguments(defaultArgs)
                .on('end', function() {

                    assert.file([].concat(
                        defaultExpectedFiles,
                        'app/client/scripts/routes/test_deps.js',
                        'app/client/templates/test',
                        'app/client/templates/test/index.hbs'
                    ));

                    assert.fileContent('app/client/scripts/routes/test_route.js', /App.TestRoute = Ember.Route/);
                    assert.fileContent('app/client/scripts/routes/test_route.js', /requireLists: \['routes\/test_deps'\]/);

                    assert.fileContent('app/client/scripts/routes/test_deps.js', /'templates\/test'/);
                    done();
                });
        });        
    });

    describe('with default options', function() {
        describe('when router.js file is not present', function() {
            it('should generate expected files', function(done) {
                this.app_route
                    .withArguments(defaultArgs)
                    .withPrompt({routerFile: true})
                    .on('end', function() {

                        assert.file(defaultExpectedFiles);

                        assert.fileContent('app/client/scripts/routes/test_route.js', /App.TestRoute = Ember.Route/);

                        assert.noFileContent('app/client/scripts/routes/test_route.js', /requireLists: \['routes\/test_deps'\]/);

                        assert.noFile([
                            'app/client/scripts/routes/test_deps.js'
                        ]);

                        assert.file('app/client/scripts/router.js');

                        assert.fileContent('app/client/scripts/router.js',
                                           /map\(function\(\) {[\s\S]+?\n? {8}this.route\('test'\);\n {4}\}\)/);
                        
                        done();
                    });
            });
        });

        describe('when router.js file present', function() {
            beforeEach(function() {
                this.app_route.inDir(path.join(__dirname, '.tmp'), function(dir) {
                    fs.copySync(path.join(__dirname, 'fixtures/base_router.js'), path.join(dir, 'app/client/scripts/router.js'));
                    
                });
                
                // helpers
                //     .run(path.join(__dirname, '../generators/route'))
                //     .inDir(path.join(__dirname, '.tmp'))
                //     .withArguments(defaultArgs)
                //     .withPrompt({routerFile: true})
                //     .on('end', function() {
                //         done();
                //     });
            });
            
            it('should generate expected files and inject route', function(done) {
                this.app_route
                    .withArguments(defaultArgs)
                    .on('end', function() {

                        /* no need
                        assert.file(defaultExpectedFiles);

                        assert.fileContent('app/client/scripts/routes/test_route.js', /App.TestRoute = Ember.Route/);

                        assert.noFileContent('app/client/scripts/routes/test_route.js', /requireLists: \['routes\/test_deps'\]/);

                        assert.noFile([
                            'app/client/scripts/routes/test_deps.js'
                        ]);

                         */

                        
                        assert.file('app/client/scripts/router.js');
                        
                        assert.fileContent('app/client/scripts/router.js',
                                           /map\(function\(\) {[\s\S]+?\n? {8}this.route\('test'\);\n {4}\}\)/);
                        
                        done();
                    });
            });

            describe('with path argument given', function() {

                it('should inject route with path', function(done) {
                    this.app_route
                        .withArguments('Test "/:test_id"')
                        .on('end', function() {

                            assert.fileContent('app/client/scripts/router.js',
                                               /map\(function\(\) {[\s\S]+?\n? {8}this.route\('test', \{ path\: '\/\:test_id' \}\);\n {4}\}\)/);
                            done();
                        });
                });
                
            });
        });
    });
});
