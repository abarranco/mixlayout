(function() {
  'use strict';

  module.exports = function() {
    return {
      clean : ['App/www', '.tscache'],
      options :{
        force: true
      }
    };
  };
})();