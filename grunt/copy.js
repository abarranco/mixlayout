(function () {
  'use strict';

  module.exports = function () {
    var path = require('path')


    return {
      js: {
        expand: true,
        cwd: 'src/script',
        src: '**/*.js',
        dest: 'App/www/script',
        flatten: false
      },
      jspm_packages: {
        expand: true,
        cwd: 'src/jspm_packages',
        src: '**/*.js',
        dest: 'App/www/jspm_packages',
        flatten: false
      },
      html: {
        expand: true,
        cwd: 'src/',
        src: '**/*.html',
        dest: 'App/www/',
        flatten: false
      },
      media: {
        expand: true,
        cwd: 'src/media',
        src: '**/*',
        dest: 'App/www/media',
        flatten: false
      }
    };
  };
})();