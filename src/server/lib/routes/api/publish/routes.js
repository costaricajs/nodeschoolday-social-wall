const instagram = require('./instagram/routes');
const twitter = require('./twitter/routes');

var routes = [
  ...instagram,
  ...twitter
];

module.exports = routes;
