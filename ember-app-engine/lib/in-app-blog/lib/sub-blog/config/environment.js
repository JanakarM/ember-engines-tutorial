/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'sub-blog',
    podModulePrefix: 'sub-blog/pods',
    environment
  };

  return ENV;
};
