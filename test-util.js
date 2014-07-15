'use strict';

// Shorten stack trace https://github.com/visionmedia/mocha/issues/545

console.oldError = console.error;
console.error = function (args) {
  if (typeof arguments.stack !== 'undefined') {
    console.oldError.call(console, arguments.stack);
  } else {
    if (typeof arguments[4] !== 'undefined') {
      var traceToShow = arguments[4].split('\n').slice(0, 4);
      arguments[4] = traceToShow.join('\n');
    }
    console.oldError.apply(console, arguments);
  }
};
