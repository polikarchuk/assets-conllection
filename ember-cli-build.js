'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    svgJar: {
      strategy: 'symbol',
      sourceDirs: ['public/assets/images'],
    },
  });

  return app.toTree();
};
