'use strict';

const mode = process.env.MODE || 'production';

const shared = require('./shared');

let routes;

if (mode === 'production') {

  const production = require('./production');

  routes = [
    ...shared,
    ...production
  ];
} else {

  const develop = require('./develop');

  routes = [
    ...shared,
    ...develop
  ];
}

module.exports = routes;
