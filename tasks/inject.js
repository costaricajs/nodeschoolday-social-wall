'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config.js');
var util = require('./util.js');
var path = require('path');
var inject = require('gulp-inject');

var wiredep = require('wiredep');

var injectBowerLibs = {
  name: 'injectBowerLibs',
  relative: true,
  //ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectBowerLibs');
        //filePath = filePath.replace('bower_components', 'vendors');
        console.log(filePath);
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectBowerLibsBuild = {
  name: 'injectBowerLibs',
  relative: true,
  ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectBowerLibs');
        filePath = filePath.replace('bower_components', 'vendors');
        console.log(filePath);
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectAppCode = {
  name: 'injectAppCode',
  relative: true,
  ignorePath: '../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectAppCode');
        console.log(filePath);
        filePath = 'app/' + filePath;
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectAppCodeBuild = {
  name: 'injectAppCode',
  relative: true,
  ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectAppCode');
        console.log(filePath);
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectBowerCSS = {
  name: 'injectBowerCSS',
  relative: true,
  // ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectBowerCSS');
        console.log(filePath);
        //filePath = filePath.replace('bower_components', 'vendors');
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

var injectBowerCSSBuild = {
  name: 'injectBowerCSS',
  relative: true,
  ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectBowerCSS');
        console.log(filePath);
        filePath = filePath.replace('bower_components', 'vendors');
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

var injectAppCSS = {
  name: 'injectAppCSS',
  relative: true,
  //ignorePath: '../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectAppCSS');
        console.log(filePath);
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

var injectAppCSSBuild = {
  name: 'injectAppCSS',
  relative: true,
  ignorePath: '../../../../../../',
  starttag: '//- {{name}}:{{ext}}',
  endtag: '//- endinject',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'pug') {
        console.log('injectAppCSS');
        console.log(filePath);
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

function bowerLibs(done) {

  var bower = wiredep(config.wiredep)['js'] || '';

  util.debug('bowerLibs');
  console.log(bower);

  done();
}

function injectJSFilesToIndex() {

  var bowerList = wiredep(config.wiredep)['js'] || [];

  var bower = gulp.src(bowerList);
  var appCode = gulp.src(config.appCode);

  return gulp.src(config.scriptsDestination)
    .pipe($.inject(
      bower,
      injectBowerLibs))
    .pipe($.inject(
      appCode.pipe($.angularFilesort()),
      injectAppCode))
    .pipe(gulp.dest(config.scriptsDestinationFolder));
}

function injectBowerCSSToIndex(done) {

  var bowerList = wiredep({})['css'] || undefined;

  if (bowerList) {
    var bower = gulp.src(bowerList);

    console.log(bowerList);

    return gulp.src(config.cssDestination)
      .pipe($.inject(
        bower,
        injectBowerCSS))
      .pipe(gulp.dest(config.cssDestinationFolder));
  }
  else {
    done();
  }

}

function injectAppCSSToIndex(done) {

  var cssList = config.appCSS;

  if (cssList) {
    var appCSS = gulp.src(cssList);

    console.log(cssList);

    return gulp.src(config.cssDestination)
      .pipe($.inject(
        appCSS,
        injectAppCSS))
      .pipe(gulp.dest(config.cssDestinationFolder));
  }
  else {
    done();
  }

}

function extName(file) {
  file = file.split('?')[0];
  return path.extname(file).slice(1);
}

function injectJSBuild() {

  var libCode = gulp.src(config.releaseLibCode);
  var appCode = gulp.src(config.releaseAppCode);

  return gulp.src(config.scriptsDestination)
    .pipe($.inject(
      libCode,
      injectBowerLibsBuild))
    .pipe($.inject(
      appCode,
      injectAppCodeBuild))
    .pipe(gulp.dest(config.scriptsDestinationFolder));
}

function injectCSSBuild() {

  var libCSS = gulp.src(config.releaseLibCSS);
  var appCSS = gulp.src(config.releaseAppCSS);

  return gulp.src(config.cssDestination)
    .pipe($.inject(
      libCSS,
      injectBowerCSSBuild))
    .pipe($.inject(
      appCSS,
      injectAppCSSBuild))
    .pipe(gulp.dest(config.cssDestinationFolder));

}

gulp.task('bowerLibs', bowerLibs);
gulp.task('injectJSFilesToIndex', injectJSFilesToIndex);
gulp.task('injectBowerCSSToIndex', injectBowerCSSToIndex);
gulp.task('injectAppCSSToIndex', injectAppCSSToIndex);

gulp.task('inject', gulp.series(injectJSFilesToIndex, injectBowerCSSToIndex, injectAppCSSToIndex));

gulp.task('injectBuild', gulp.series(injectJSBuild, injectCSSBuild));

module.exports = gulp;
