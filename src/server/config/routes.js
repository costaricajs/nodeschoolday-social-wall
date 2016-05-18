'use strict';

const publicRoutes = require('../lib/routes/web/routes');
const upload = require('../lib/routes/api/upload/routes');
const datasets = require('../lib/routes/api/datasets/routes');

let routes = [
  ...publicRoutes,
  ...upload,
  ...datasets
];

module.exports = routes;
