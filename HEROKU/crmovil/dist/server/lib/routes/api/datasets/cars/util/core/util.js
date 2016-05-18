'use strict';

const models = require('./models');

function getCarBrandsAvailable(options) {
  return models.getCarBrandsAvailable(options);
}

function getCarModelsAvailable(options) {
  return models.getCarModelsAvailable(options);
}

function getCarYears(options) {
  return models.getCarYears(options);
}

module.exports = {
  getCarBrandsAvailable,
  getCarModelsAvailable,
  getCarYears
};
