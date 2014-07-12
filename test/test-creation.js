/*global describe, beforeEach, it, xit */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

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
        this.app = helpers
            .run(path.join(__dirname, '../generators/app'))
            .inDir(path.join(__dirname, '.tmp'));
            //.withGenerators([[helpers.createDummyGenerator(), 'ember-fullstack']]);
    });

    it('should generate expected files', function(done) {
        helpers.mockPrompt(this.app, defaultOptions);

        this.app.on('end', function() {
            assert.file([ // TODO assert directory
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
});
