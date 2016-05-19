'use strict';

const publicRoutes = require('../lib/routes/web/routes');
const media = require('../lib/routes/api/publish/routes');

let routes = [
  ...publicRoutes,
  ...media
];

module.exports = routes;
