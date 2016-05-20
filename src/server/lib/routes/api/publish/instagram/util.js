'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';

function publish(options) {

  console.log('options.input', options.input);

}

function subscribe(options) {

  return new Promise((resolve, reject)=> {

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
  subscribe,
  publish
};
