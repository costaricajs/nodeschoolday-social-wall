'use strict';

let dynamicSettings = require('./dynamic-configuration');

const settings = {
  debug: {
    request: ['*']
  },
  connections: {
    routes: {
      cors: true,
      files: {
        relativeTo: __dirname + '/../client'
      }
    }
  },
  app: dynamicSettings
};

module.exports = settings;
