const handlers = require('./handlers.js');
const constants = require('./constants.js');
const validators = require('./validators');

var routes = [
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion + '/twitter/recent',
    config: {
      auth: false,
      plugins: {},
      description: 'Get recent tweets',
      notes: ['Publish a photo'],
      tags: ['api', 'twitter', 'public', 'publish'],
      validate: {},
      handler: handlers.getPhotos
    }
  }
];

module.exports = routes;
