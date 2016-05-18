'use strict';

const util = require('./util');

const Boom = require('boom');

function getCarBrandsAvailable(request, reply) {

  let options = {
    buffer: {},
    input: {},
    request,
    reply,
    result: {}
  };

  util.getCarBrandsAvailable(options)
    .then(onSuccess)
    .catch(onError);

}

function getCarModelsAvailable(request, reply) {

  let options = {
    buffer: {},
    input: request.params,
    request,
    reply,
    result: {}
  };

  util.getCarModelsAvailable(options)
    .then(onSuccess)
    .catch(onError);

}

function getCarYears(request, reply) {
  let options = {
    buffer: {},
    input: request.params,
    request,
    reply,
    result: {}
  };

  util.getCarYears(options)
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
  getCarBrandsAvailable,
  getCarModelsAvailable,
  getCarYears
};
