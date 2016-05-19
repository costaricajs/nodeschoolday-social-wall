'use strict';

const util = require('./util');

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler(request, reply){

        util.getParticipants()
          .then((participants)=> {
            reply.view('./app/templates/index.pug',
              {
                participants
              });
          })
          .catch(()=> {
            reply.view('./app/templates/index.pug',
              {
                participants: {}
              });
          });
      },
      tags: ['web'],
      validate: {}
    }
  },
  {
    method: 'GET',
    path: '/features/{path*}',
    handler: {
      directory: {
        path: './app/features',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  },
  {
    method: 'GET',
    path: '/app/{path*}',
    handler: {
      directory: {
        path: './app',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/{path*}',
    handler: {
      directory: {
        path: './assets',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  }
];

module.exports = routes;
