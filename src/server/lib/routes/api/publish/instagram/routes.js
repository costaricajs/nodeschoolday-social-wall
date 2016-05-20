const handlers = require('./handlers.js');
const constants = require('./constants.js');
const validators = require('./validators');

var routes = [
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion + '/publish/photo',
    config: {
      auth: false,
      plugins: {},
      description: 'Publish a photo',
      notes: ['Publish a photo'],
      tags: ['api', 'instagram', 'public', 'subscribe'],
      validate: {},
      handler: handlers.subscribe
    }
  },
  {
    method: 'POST',
    path: '/api/' + constants.currentVersion + '/publish/photo',
    config: {
      auth: false,
      plugins: {},
      description: 'Publish a photo',
      notes: ['Publish a photo'],
      tags: ['api', 'instagram', 'public', 'publish'],
      validate: {},
      handler: handlers.publish
    }
  }
];

module.exports = routes;
