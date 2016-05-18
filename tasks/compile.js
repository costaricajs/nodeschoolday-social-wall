const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const config = require('./config.js');
const $ = require('gulp-load-plugins')({lazy: true});
const args = require('yargs').argv;
const wiredep = require('wiredep');

function concatLibsJS() {

  var bowerList = wiredep(config.wiredep)['js'] || '';

  return gulp.src(bowerList)
    .pipe(concat(config.finalLibCode))
    .pipe($.uglify())
    .pipe($.rev())
    .pipe(gulp.dest(config.releaseSource));

}

function compile() {
  return gulp.src(config.appSourceCode)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(config.appCompiledCode));
}

function concatAppJS() {
  return gulp.src(config.appCode)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe($.angularFilesort())
    .pipe(concat(config.finalAppCode))
    .pipe($.uglify())
    .pipe($.rev())
    .pipe(gulp.dest(config.releaseSource));
}

function concatLibsCSS() {

  var bowerList = wiredep(config.wiredep)['css'] || '';

  return gulp.src(bowerList)
    .pipe(concat(config.finalLibCSS))
    .pipe($.autoprefixer({
      browsers: config.browsers
    }))
    .pipe($.cssnano({zindex: false}))
    .pipe($.rev())
    .pipe(gulp.dest(config.releaseSource));

}

function concatAppCSS() {

  //https://davidwalsh.name/goodbye-vendor-prefixes

  return gulp.src(config.appCSS)
    .pipe(concat(config.finalAppCSS))
    .pipe($.autoprefixer({
      browsers: config.browsers
    }))
    .pipe($.cssnano({zindex: false}))
    .pipe($.rev())
    .pipe(gulp.dest(config.releaseSource));

}

function styles() {
  return gulp.src(config.appStyles)
    .pipe($.stylus())
    .pipe(gulp.dest(config.appStylesDestination));
}

gulp.task('styles', styles);

gulp.task('concatLibsJS', concatLibsJS);
gulp.task('concatAppJS', concatAppJS);
gulp.task('concatLibsCSS', concatLibsCSS);
gulp.task('concatAppCSS', concatAppCSS);
gulp.task('concat', gulp.parallel(concatLibsJS, concatAppJS, concatLibsCSS, concatAppCSS));
gulp.task('compile', compile);

module.exports = gulp;
