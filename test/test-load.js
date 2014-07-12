/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');

describe('ember-fullstack generator', function () {
  it('wtf can be imported without blowing up', function () {
    var app = require('../generators/app');
    assert(app !== undefined);
  });
});
