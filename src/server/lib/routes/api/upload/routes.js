
const handlers = require('./handlers.js');
const constants = require('./constants.js');
const validators = require('./validators');

var routes = [
  {
    method: 'POST',
    path: '/api/' + constants.currentVersion +'/upload/image',
    config: {
      auth: false,
      plugins: {
        'hapi-swagger': {
          payloadType: 'form'
        }
      },
      description: 'Add new image',
      notes: ['You can upload an image'],
      payload: {
        output: 'stream',
        parse: false,
        maxBytes: 209715200
      },
      tags: ['api', 'upload', 'admin', 'image'],
      validate: {
        query: validators.image
      },
      handler: handlers.uploadImages
    }
  }
  // {
  //   method: 'POST',
  //   path: '/api/upload/video',
  //   config: {
  //     auth: false,
  //     description: 'Add new video',
  //     notes: ['You can upload a video'],
  //     payload: {
  //       output: 'stream',
  //       parse: false,
  //       allow: 'multipart/form-data',
  //       maxBytes: 209715200
  //     },
  //     tags: ['api', 'upload', 'admin', 'image'],
  //     handler: handlers.uploadVideo
  //   }
  // }
];

module.exports = routes;
