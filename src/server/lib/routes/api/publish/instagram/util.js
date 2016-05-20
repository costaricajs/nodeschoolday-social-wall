'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';
let hashTags = process.env.HASHTAGS ? process.env.HASHTAGS.split(',') : ['javascript', 'nodejs'];

function publish(options) {

  return getPhotos(options);

}

function getPhotos(options) {

  return new Promise((resolve, reject)=> {

    const instagram = options.request.server.plugins['stream'].instagram;

    console.log('options.input', options.input);

    instagram.tag_media_recent(hashTags[0],
      (error, result, remaining, limit) => {

        if (error) {
          console.log(error);
        } else {

          const notificationsChannel = options.request.server.plugins['stream'].notificationsChannel;
          notificationsChannel.emit('instagram-picture', result);
          options.result = result;

        }

        resolve(options);

      });

  });

}

function subscribe(options) {

  return new Promise((resolve, reject)=> {

    console.log(options.request.query);

    if (options.input['hub.verify_token'] === verifyToken) {
      options.result = options.input['hub.challenge'];
      resolve(options);
    } else {
      options.error = 'Verify token incorrect';
      reject(options);
    }

  });

}

// Public
module.exports = {
  publish,
  subscribe,
  getPhotos
};
