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
    
    beforeEach(function() {
        this.app = helpers
            .run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, '.tmp'));
    });

    it('should generate expected files', function(done) {
        this.timeout(10000);
        this.app.withPrompt(defaultOptions)
            .on('end', function() {

                // project files
                assert.file([
                    '.gitignore',
                    '.jshintrc',
                    '.bowerrc',
                    'package.json',
                    'bower.json',
                    'gulpfile.js'
                ]);

                // client files
                assert.file([
                    // app/client
                    'app/client/favicon.ico',
                    'app/client/robots.txt',
                    // app/client/styles
                    'app/client/styles/reset.scss',
                    'app/client/styles/style.scss',
                    'app/client/styles/layout/footer.scss',
                    'app/client/styles/pages/home.scss',
                    // app/client/templates
                    'app/client/templates/_nav-main.hbs',
                    'app/client/templates/catchall.hbs',
                    'app/client/templates/application.hbs',
                    'app/client/templates/index.hbs',
                    'app/client/templates/guides.hbs',
                    'app/client/templates/guides/_guide.hbs',
                    'app/client/templates/guides/guide.hbs',
                    'app/client/templates/guides/index.hbs',
                    // app/client/scripts
                    'app/client/scripts/common.js',
                    'app/client/scripts/main.js',
                    'app/client/scripts/app.js',
                    'app/client/scripts/router.js',
                    'app/client/scripts/routes/index_route.js',
                    'app/client/scripts/routes/index_deps.js',
                    'app/client/scripts/routes/guides_route.js',
                    'app/client/scripts/routes/guides_deps.js',
                    'app/client/scripts/models/feature.js',
                    'app/client/scripts/models/guide.js',
                    'app/client/scripts/controllers/features_controller.js',
                    'app/client/scripts/controllers/features_controller.js',
                    'app/client/scripts/controllers/guide_controller.js',
                    'app/client/scripts/mixins/lazy_loader_mixin.js',
                    'app/client/scripts/views',
                    'app/client/vendor'
                ]);

                // server files
                assert.file([
                    'app/views/index.hbs',
                    'app/views/layouts/main.hbs',
                    'config/server.js'
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

            it('should pass jshint', function(done) {
                this.timeout(60000);
                this.app.withPrompt(defaultOptions)
                    .on('end', function() {
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
