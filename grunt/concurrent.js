(function () {
  'use strict';

  module.exports = function () {
    return {
      options: {
        logConcurrentOutput: true
      },
      watchSources: {
        tasks: [
          'watch:js', 'watch:ts', 'watch:html'
        ]
      }
    }
  };
})();
