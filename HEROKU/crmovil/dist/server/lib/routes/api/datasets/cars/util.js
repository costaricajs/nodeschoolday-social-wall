'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

const carsCtrl = require('./util/core/util');

function getCarBrandsAvailable(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      let brands = yield carsCtrl.getCarBrandsAvailable(options);

      options.result = {
        brands
      };

      resolve(options);

    })().catch((error)=> {
      console.error('@@@error', error);
      options.error = error;
      reject(options);
    });

  });

}

function getCarModelsAvailable(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      let models = yield carsCtrl.getCarModelsAvailable(options);

      options.result = {
        models
      };

      resolve(options);

    })().catch((error)=> {
      console.error('@@@error', error);
      options.error = error;
      reject(options);
    });

  });

}

function getCarYears(options) {

  return new Promise((resolve, reject)=> {

      let years = carsCtrl.getCarYears(options);

      options.result = {
        years
      };

      resolve(options);

  });

}

// Public
module.exports = {
  getCarBrandsAvailable,
  getCarModelsAvailable,
  getCarYears
};
