'use strict';

const Joi = require('joi');

const brand = {
  brand: Joi.string().trim().min(1).required().lowercase()
    .description('Car brand').example('Volvo')
};

module.exports = {
  brand
};
