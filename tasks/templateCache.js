'use strict';

var jade = require('gulp-jade');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config.js');
var util = require('./util.js');
const args = require('yargs').argv;

function templateCache(){

  return gulp.src(config.allHtmlTemplates)
    .pipe($.angularTemplatecache('app.template-cache.js', {
      standalone: true,
      module: 'app.templates',
      transformUrl: function(url) {
        return url.replace('public/', '');
      }
    }))
    .pipe(gulp.dest(config.appCompiledCode));
}

gulp.task('templateCache', templateCache);

module.exports = gulp;
