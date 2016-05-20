'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
const verifyToken = process.env.APP_SECRET || 'nodeschooldaycr16';

function publish(options) {

  const instagram = options.request.server.plugins['stream'].instagram;

  console.log('options.input', options.input);

  instagram.tag_search('query',
    (err, result, remaining, limit) => {
      console.log(err, result);
    });

}

function subscribe(options) {
  
}

// Public
module.exports = {
  publish,
  subscribe
};
