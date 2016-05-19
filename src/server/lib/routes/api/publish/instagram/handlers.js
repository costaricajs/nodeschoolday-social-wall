'use strict';

const util = require('./util');

const Boom = require('boom');

function publish(request, reply) {

  let options = {
    buffer: {},
    input: request.params,
    request,
    reply,
    result: {}
  };

  util.publish(options)
    .then(onSuccess)
    .catch(onError);

}

function onSuccess(options) {
  options.reply(options.result);
}

function onError(options) {
  options.reply(Boom.expectationFailed('Expected this to work', options.error || {}));
}

module.exports = {
  publish
};
