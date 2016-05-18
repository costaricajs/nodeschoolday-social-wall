
const handlers = require('./handlers.js');
const constants = require('./constants.js');
const validators = require('./validators');

var routes = [
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion +'/datasets/cars/brands/available',
    config: {
      auth: false,
      plugins: {
      },
      description: 'Get cars brands available',
      notes: ['Cars brands available'],
      tags: ['api', 'cars', 'datasets', 'public', 'brands'],
      validate: {
      },
      handler: handlers.getCarBrandsAvailable
    }
  },
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion +'/datasets/cars/years',
    config: {
      auth: false,
      plugins: {
      },
      description: 'Get cars brands available',
      notes: ['Cars brands available'],
      tags: ['api', 'cars', 'datasets', 'public'],
      validate: {
      },
      handler: handlers.getCarYears,
       cache: {
         // expiresIn: 2629750, // 1 month
         // privacy: 'private'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/' + constants.currentVersion +'/datasets/cars/models/available/{brand}',
    config: {
      auth: false,
      plugins: {
      },
      description: 'Get cars models available by brand',
      notes: ['Cars models available'],
      tags: ['api', 'cars', 'datasets', 'public', 'models'],
      validate: {
        params: validators.brand
      },
      handler: handlers.getCarModelsAvailable
      // cache: {
      //   expiresIn: 60 * 1000,
      //   privacy: 'private'
      // }
    }
  }
];

module.exports = routes;
