'use strict';

const hoek = require('hoek');
const google = require('googleapis');

let util = require('./util.js');
let channels = require('./channels');
let io;
let config;
let currentServer;

exports.register = function (server, options, next) {

  currentServer = server;

  if (options == null) {
    options = {};
  }

  let socketConfiguration = {};

  config = hoek.applyToDefaults(socketConfiguration, options);

  io = require('socket.io')(currentServer.select('api').listener, socketConfiguration);

  console.log('socket ready');

  channels.activate(io, options);

  start(next);

};

function start(done) {
  done();
}

exports.register.attributes = {
  name: 'hapi-socket-manager',
  multiple: false,
  version: '1.0.0'
};
