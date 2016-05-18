'use strict';

const fs = require('fs');
const cloudinary = require('cloudinary');
const multiparty = require('multiparty');
const async = require('async');

const constants = require('./constants');

function parseDetails(options, files) {

  return new Promise((resolve, reject)=> {

    let paths = [];

    Object.keys(files).forEach(function (file) {
      let image = files[file][0];
      paths.push(image.path);
    });


    const vision = options.request.server.plugins['hapi-gCloud'].vision;

    const imageOptions = constants.imageDetectOption;

    console.log('paths', paths);

    vision.detect(paths, imageOptions, function (error, detections, apiResponse) {

      if (!error) {
        options.buffer.images = {
          details: detections
        };
        resolve({
          paths: paths,
          detections: detections
        });
      } else {
        reject(error);
      }

    });


  });
}

function parseImages(options) {

  const form = new multiparty.Form();

  const payload = options.input.files;

  return new Promise((resolve, reject)=> {

    form.parse(payload, function (error, fields, files) {
      if (error) {
        reject(error);
      }
      else {
        options.buffer.files = files;
        resolve(files);
      }
    });

  });

}

function uploadImagesToCloud(options, paths) {

  return new Promise((resolve, reject)=> {

    let uploadResponses = [];

    async.forEachOf(paths,
      (path, index, callback)=> {
        cloudinary.uploader.upload(path, (result)=> {
          console.log(result);
          uploadResponses[index] = result;
          callback();
        }, {});
      },
      (error)=> {
        if (error) {
          reject(error);
        } else {
          options.buffer.images.upload = uploadResponses;
          resolve(uploadResponses);
        }
      });

  });

}

function prepareUploadResponse(details) {

  if (Array.isArray(details)) {

  } else {

    const colors = details.properties.colors;
    let finalColors = [];

    colors.forEach((color)=> {
      if (color.score > 5) {
        finalColors.push('#' + color.hex);
      }
    });

    return {
      colors: finalColors
    }

  }


}

function deleteFiles(paths) {
  paths.forEach((path)=> {
    fs.unlink(path, (error)=> {
      if (error) {
        console.log('@@@error', error);
      } else {
        console.log('deleted', path);
      }
    });
  });
}

module.exports = {
  parseDetails,
  parseImages,
  uploadImagesToCloud,
  prepareUploadResponse,
  deleteFiles
};
