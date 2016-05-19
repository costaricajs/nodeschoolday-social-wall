'use strict';

var config = {

  server: './src/server/index.js',
  serverSource: './src/server',

  source: './src',
  allSourceFiles: './src/**/*',

  allHtmlTemplates: [
    './src/client/**/*.template.html'
  ],

  allDistFiles: ['./dist/**/*'],
  herokuConfig: ['./package.json', './Procfile'],

  indexHTML: './src/client/public/app/templates/index.html',
  scriptsDestination: './src/client/public/app/templates/layout/scripts.pug',
  cssDestination: './src/client/public/app/templates/layout/head.pug',
  scriptsDestinationFolder: './src/client/public/app/templates/layout/',
  cssDestinationFolder: './src/client/public/app/templates/layout/',
  appCode: ['./src/client/public/app/**/*.js'],
  appSourceCode: ['./src/client/public/app/**/*.es6'],
  appCompiledCode: './src/client/public/app/',
  appCSS: ['./src/client/public/**/*.css'],
  appStyles: ['./src/client/public/**/*.styl'],
  appStylesDestination: './src/client/public/',
  allPugApp: './src/client/public/**/*.pug',
  allHtmlApp: './src/client/public/**/*.html',
  allHtmlAppDestination: './src/client/public/',

  finalLibCode: 'allLibApp.js',
  finalAppCode: 'allApp.js',
  finalLibCSS: 'allLibApp.css',
  finalAppCSS: 'allApp.css',
  releaseSource: './dist/public',
  dist: './dist',
  heroku: './HEROKU/app/dist',
  herokuRoot: './HEROKU/app',
  bowerReleaseFiles: './src/client/public/assets/js',

  releaseAppCode: ['./dist/**/allApp-*.js'],
  releaseLibCode: ['./dist/**/allLibApp-*.js'],

  releaseAppCSS: ['./dist/**/allApp-*.css'],
  releaseLibCSS: ['./dist/**/allLibApp-*.css'],

  wiredep: {
    exclude: ['bower_components/animate.css/animate.css'],
    overrides: {
      'angular-material-icons': {
        "main": [
          "angular-material-icons.js",
          "angular-material-icons.css"
        ]
      },
      'socket.io-client': {
        main: 'socket.io.js'
      }
    }
  },
  browsers: ['last 4 versions', 'Explorer >= 10', 'Android >= 3', 'Safari >= 7', 'iOS >= 7']
};

module.exports = config;
