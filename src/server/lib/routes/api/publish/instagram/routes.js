
const handlers = require('./handlers.js');
const constants = require('./constants.js');
const validators = require('./validators');

var routes = [
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion +'/publish/photo',
    config: {
      auth: false,
      plugins: {
      },
      description: 'Publish a photo',
      notes: ['Publish a photo'],
      tags: ['api', 'instagram', 'public'],
      validate: {
      },
      handler: handlers.publish
    }
  }
];

module.exports = routes;
