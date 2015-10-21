module.exports = function (grunt) {
  'use strict';

  var path = require('path');

  function buildInitConfig() {
    var initConfig = {};
    var availableTasks = [
      'clean',
      'copy',
      'watch',
      'concurrent',
      'ts',
      'notify'
    ];
    availableTasks.forEach(function (task) {
      initConfig[task] = require(path.resolve('grunt/' + task))();
    });
    return initConfig;
  }

  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*']});

  grunt.initConfig(buildInitConfig());

  grunt.registerTask('default', ['clean', 'compile']);

  grunt.registerTask('compile', ['copyAll', 'compileTS', 'notify:compiled']);

  grunt.registerTask('compileTS', ['ts:compileAll', 'notify:compiled'])

  grunt.registerTask('copyAll', ['copy:js', 'copy:jspm_packages', 'copy:html', 'copy:media']);

  grunt.registerTask('watchSources', ['clean', 'compile', 'concurrent:watchSources']);

  grunt.registerTask('ws', ['watchSources']);

};