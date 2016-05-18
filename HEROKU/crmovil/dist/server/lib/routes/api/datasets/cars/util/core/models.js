'use strict';

const constants = require('./constants.js');
const brandsExpiration = constants.brandsExpiration;
const modelsExpiration = constants.modelsExpiration;
const vehiclesAPIBase = constants.vehiclesAPIBase;
const carYearsFrom = constants.carYearsFrom;

const request = require('request-promise');
const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

function getCarBrandsAvailable(options) {
  return new Promise((resolve, reject)=> {
    // const brands = constants.brands.map((brand)=>{
    //   return {
    //     id: brand.id,
    //     name: brand.name,
    //     value: brand.name.toLowerCase()
    //   }
    // });
    resolve(constants.brands);
  });
}

function getCarModelsAvailable(options) {

  return new Promise((resolve, reject)=> {

    const key = options.request.route.path + ':' + JSON.stringify(options.input);
    const cache = options.request.server.plugins['hapi-cache'].client;

    coroutine(function*() {

      const models = yield cache.get(key);
      if (models) {
        console.log('@@@@', 'from cache');
        resolve(JSON.parse(models));
      } else {
        console.log('@@@@', 'from API request');
        const brand = options.input.brand;
        const query = vehiclesAPIBase + 'getmodelsformake/' + brand + '?format=json';
        const models = yield request(query);
        const finalModels = cleanModels(models);
        resolve(finalModels);
        cache.set(key, JSON.stringify(finalModels), 'EX', brandsExpiration);
      }

    })().catch((error)=> {
      console.error('@@@error', error);
      options.error = error;
      reject(options);
    });


  });
}

/////////////////////////////////////////

function cleanModels(data) {

  data = JSON.parse(data);

  const models = data.Results.map(cleanModel);

  const dataModels = {
    count: data.Count,
    criteria: data.SearchCriteria,
    list: models
  };

  return dataModels;

}

function cleanModel(model) {
  return {
    id: model.Model_ID,
    name: model.Model_Name,
    value: model.Model_Name.toLowerCase()
  }
}

function getCarYears(options) {

  let years = [];
  const today = new Date();
  const lastYear = today.getFullYear() + 1;

  for(let year = carYearsFrom; year <= lastYear; ++year){
    years.push({
      name: year.toString(),
      value: year.toString()
    });
  }

  return years;
}

module.exports = {
  getCarBrandsAvailable,
  getCarModelsAvailable,
  getCarYears
};
