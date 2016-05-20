'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';
let hashTags = process.env.HASHTAGS ? process.env.HASHTAGS.split(',') : ['javascript', 'nodejs'];

function publish(options) {

  return new Promise((resolve, reject)=>{

    const instagram = options.request.server.plugins['stream'].instagram;

    console.log('options.input', options.input);

    instagram.tag_media_recent(hashTags[0],
      (err, result, remaining, limit) => {

        options.result = {
          err, result, remaining, limit
        };

        resolve(options);
      });

  });

}

function subscribe(options) {

}

// Public
module.exports = {
  publish,
  subscribe
};
