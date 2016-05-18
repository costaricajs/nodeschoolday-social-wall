'use strict';

const routes = [
  //DEV MODE
  {
    method: 'GET',
    path: '/bower_components/{path*}',
    handler: {
      directory: {
        path: './../../../bower_components',
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
  },
  {
    method: 'GET',
    path: '/vendors/{path*}',
    handler: {
      directory: {
        path: './assets/js',
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
