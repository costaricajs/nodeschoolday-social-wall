'use strict';

const Joi = require('joi');

const image = {
  options: Joi.object().default({}).required()
};

const validators = {
  image
};

module.exports = validators;
