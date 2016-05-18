'use strict';

var gulp = require('gulp');
var hub = require('gulp-hub');
hub(['tasks/*.js']);

const config = require('./tasks/config.js');

function watch() {
  gulp.watch(config.appSourceCode, gulp.series('compile'));
  gulp.watch(config.allPugApp, gulp.series('compileTemplates', 'templateCache'));
  gulp.watch(config.appStyles, gulp.series('styles'));
}

gulp.task('watch', watch);

gulp.task('dev', gulp.series('cleanBuild', 'styles', 'compile', 'cleanHtmlFiles', 'inject', 'compileTemplates', 'templateCache', gulp.parallel('dev-server', 'watch')));

gulp.task('build', gulp.series('compile', 'styles', 'cleanBuild', 'cleanHtmlFiles', 'concat','injectBuild', 'compileTemplatesAndOptimize', 'templateCache', 'copy'));

gulp.task('buildHeroku', gulp.series('build', 'cleanHeroku', 'copyHeroku'));

gulp.task('default', gulp.series('dev'));

