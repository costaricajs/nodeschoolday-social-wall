'use strict';

const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;

const imagesCtrl = require('./util/images/util');

function uploadImages(options) {

  return new Promise((resolve, reject)=> {

    coroutine(function*() {

      let files = yield imagesCtrl.parseImages(options);
      let images = yield imagesCtrl.parseDetails(options, files);
      const {paths, detections} = images;
      let uploadedFiles = yield imagesCtrl.uploadImagesToCloud(options, paths);
      imagesCtrl.deleteFiles(paths);

      const response = imagesCtrl.prepareUploadResponse(detections);

      options.result = detections;

      resolve(options);

    })().catch((error)=> {
      console.error('@@@error', error);
      options.error = error;
      reject(options);
    });

  });

}

// Public
module.exports = {uploadImages};
