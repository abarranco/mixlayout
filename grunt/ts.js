(function () {
  'use strict';

  module.exports = function () {
    return {
      compileAll: {
        src: 'src/script/app/**/*.ts',
        dest: 'App/www/script/app',
        options: {
          target: 'es5',
          module: 'amd',
          sourceMap: true,
          verbose: false,
          fast: 'never',
          failOnTypeErrors: false
        }
      }
    };
  };
})();
