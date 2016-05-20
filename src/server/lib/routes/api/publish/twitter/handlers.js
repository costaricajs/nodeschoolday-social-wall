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

function onSuccess(options) {
  options.reply(options.result);
}

function onError(options) {
  options.reply(Boom.expectationFailed(options.error || {}));
}

module.exports = {
};
