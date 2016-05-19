'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

function publish(options){

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      options.result = {
        status: 'ok'
      };

      resolve(options);

    })().catch((error)=> {
      console.error('@@@error', error);
      options.error = error;
      reject(options);
    });

  });
}

// Public
module.exports = {
  publish
};
