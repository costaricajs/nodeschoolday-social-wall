'use strict';

var args = require('yargs').argv;
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});

var config = require('./config.js');
var util = require('./util.js');

/**
 * serve the dev environment
 * --debug-brk or --debug
 * --nosync
 */
function dev(done) {
  serve();
  done();
}

/**
 * serve the code
 * --debug-brk or --debug
 * --nosync
 */

function serve() {

  var nodeOptions = {
    script: config.server,
    delayTime: 1000,
    watch: config.serverSource,
    "execMap": {
      // "js": "node --harmony_modules"
    }
  };

  if (args.verbose) {
    console.log(nodeOptions);
  }

  return $.nodemon(nodeOptions)
    .on('restart', function (ev) {
      util.debug('*** nodemon restarted');
      util.debug('files changed:\n' + ev);
    })
    .on('start', function () {
      util.debug('*** nodemon started');
    })
    .on('crash', function () {
      util.debug('*** nodemon crashed: script crashed for some reason');
    })
    .on('exit', function () {
      util.debug('*** nodemon exited cleanly');
    });
}

gulp.task('dev-server', gulp.series(dev));

module.exports = gulp;
