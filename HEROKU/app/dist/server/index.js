'use strict';

const Hapi = require('hapi');
const ip = require('ip');
const bluebird = require('bluebird');
const coroutine = bluebird.coroutine;
let port = 3010;

const settings = require('./config/settings');
let server = {};

const plugins = require('./config/plugins');
const routes = require('./config/routes');

//////////////////////////////////////////////////

coroutine(activateServer)().catch((error)=> {
  console.error('error', error);
});

//////////////////////////////////////////////////

function* activateServer() {

  createServer();
  setupConnections();
  yield setupPlugins();
  setupRoutes();
  startServer();

}

//////////////////////////////////////////////////

function createServer() {

  console.log('createServer');
  server = new Hapi.Server(settings);

}

function setupConnections() {

  console.log('setupConnections');
  server.connection(
    {
      port: process.env.PORT || port,
      labels: 'api',
      routes: {
        files: {
          relativeTo: __dirname + '/../client/public/'
        },
        cors: true
      }
    }
  );

}

function setupPlugins() {

  console.log('setupPlugins');

  return new Promise((resolve, reject)=> {

    server.register(plugins, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

}

function setupRoutes() {

  let api = server.select('api');

  api.route(routes);

  api.views({
    engines: {
      'html': {
        module: require('handlebars')
      },
      'pug': {
        module: require('pug')
      }
    },
    path: __dirname + '/../client/public/',
    compileOptions: {},
    isCached: false
  });

}

function startServer() {

  server.start((err) => {

    if (err) {
      throw err;
    } else {
      console.log('Server running at:', server.info.uri);
      console.log('IP: ' + ip.address() + ':' + (process.env.PORT || port));
    }

  });

}
