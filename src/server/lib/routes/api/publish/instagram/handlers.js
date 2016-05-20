'use strict';

const util = require('./util');

const Boom = require('boom');

function subscribe(request, reply) {

  let options = {
    buffer: {},
    input: request.query,
    request,
    reply,
    result: {}
  };

  console.log('subscribe');

  util.subscribe(options)
    .then(onSuccess)
    .catch(onError);

}

function publish(request, reply) {

  let options = {
    buffer: {},
    input: request.payload,
    request,
    reply,
    result: {
      status: 'ok'
    }
  };

  console.log('publish');

  util.publish(options);

  onSuccess(options);

}

function onSuccess(options) {
  options.reply(options.result);
}

function onError(options) {
  options.reply(Boom.expectationFailed('Expected this to work', options.error || {}));
}

module.exports = {
  publish,
  subscribe
};
