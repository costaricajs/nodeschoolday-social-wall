'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';

function publish(options) {

  return new Promise((resolve, reject)=> {
    console.log('--------------------------');
    console.log('options.request.query');
    console.log(options.request.query);

    if (options.input['hub.verify_token'] === verifyToken) {
      options.result = options.input['hub.challenge'];
      console.log('options.result', options.result, 1);
      resolve(options);
    } else {
      options.error = 'Verify token incorrect';
      reject(options);
    }


  });
}

// Public
module.exports = {
  publish
};
