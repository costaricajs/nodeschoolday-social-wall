'use strict';

const routes = [
  {
    method: 'GET',
    path: '/dist/{path*}',
    handler: {
      directory: {
        path: './../../../dist',
        redirectToSlash: true,
        listing: true
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
