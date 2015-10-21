(function () {
  'use strict';

  module.exports = function () {
    var fs = require('fs');
    var jsFiles = 'src/script/**/*.js';
    var tsFiles = 'src/script/**/*.ts';
    return {
      options: {
        spawn: false,
        interval: 1000
      },
      js: {
        files: [jsFiles],
        tasks: ['copy:js', 'notify:compiled']
      },
      ts: {
        files: [tsFiles],
        tasks: ['ts:compileAll', 'notify:compiled']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:html', 'notify:compiled']
      }
    };
  };
})();