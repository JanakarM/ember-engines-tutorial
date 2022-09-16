/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'sub-blog',

  lazyLoading: true,

  isDevelopingAddon() {
    return true;
  }
});
