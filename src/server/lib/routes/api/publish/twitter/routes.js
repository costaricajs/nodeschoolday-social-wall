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
      notes: ['Recent tweets'],
      tags: ['api', 'twitter', 'public'],
      validate: {},
      handler: handlers.fetchTwitter
    }
  }
];

module.exports = routes;
