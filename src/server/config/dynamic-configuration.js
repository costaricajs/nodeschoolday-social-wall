'use strict';

const fs = require('fs');

const path = __dirname;
const configFile = 'config.json';
const configFilePath = path + '/' + configFile;
const settingsFile = fs.readFileSync(configFilePath);
const serverSettings = JSON.parse(settingsFile);

const settings = {
  path,
  config: configFilePath,
  servers: serverSettings
};

module.exports = {settings};
