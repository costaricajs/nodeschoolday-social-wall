'use strict';

var wiredep = require('wiredep');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config.js');
var util = require('./util.js');

function compileTemplates() {
  return gulp.src(config.allPugApp)
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.allHtmlAppDestination));
}

function compileTemplatesAndOptimize() {

  var opts = {
    collapseWhitespace: true,
    removeEmptyAttributes: false,
    removeComments: true
  };

  return gulp.src(config.allPugApp)
    .pipe($.pug({}))
    .pipe($.htmlmin(opts))
    .pipe(gulp.dest(config.allHtmlAppDestination));
}

function cleanHtmlFiles(done) {
  util.cleanFiles([].concat(
    config.allHtmlApp
  ));
  done();
}

function cleanBuild(done) {
  util.cleanFiles([].concat(
    config.dist
  ));
  done();
}

function cleanHeroku(done) {
  util.cleanFiles([].concat(
    config.heroku
  ));
  done();
}


// function copy() {
//
//   var options = {prefix: 1};
//
//   return gulp.src(config.source)
//     .pipe($.copy(config.dist, {}));
//
// }

function copy(){
  return gulp.src(config.allSourceFiles)
    .pipe(gulp.dest(config.dist));
}

function copyHeroku(){
  return gulp.src(config.allDistFiles)
    .pipe(gulp.dest(config.heroku));
}

function copyHerokuConfig(){
  return gulp.src(config.herokuConfig)
    .pipe(gulp.dest(config.herokuRoot));
}

gulp.task('copy', copy);
gulp.task('compileTemplates', compileTemplates);
gulp.task('compileTemplatesAndOptimize', compileTemplatesAndOptimize);

gulp.task('cleanHtmlFiles', cleanHtmlFiles);
gulp.task('cleanBuild', cleanBuild);

gulp.task('copyHeroku', gulp.series(copyHeroku, copyHerokuConfig));

gulp.task('cleanHeroku', cleanHeroku);

module.exports = gulp;
