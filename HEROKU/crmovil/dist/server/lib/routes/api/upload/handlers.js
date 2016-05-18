'use strict';

const util = require('./util');

const Boom = require('boom');
const _ = require('lodash');

function uploadImages(request, reply) {

  let options = {
    buffer: {},
    input: {
      files: request.payload
    },
    request,
    reply,
    result: {}
  };

  Object.assign(options.input, request.query);

  util.uploadImages(options)
    .then(onSuccess)
    .catch(onError);

}

function onSuccess(options) {
  options.reply(options.result);
}

function onError(options) {
  options.reply(Boom.expectationFailed('Expected this to work', options.error || {}));
}

const handlers = {
  uploadImages
};

module.exports = handlers;
