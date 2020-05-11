const plugins = require('next-compose-plugins');
const sass  = require('@zeit/next-sass');

module.exports = plugins([
  [sass, {
    exportTrailingSlash: true,
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/portfolio': { page: '/portfolio'},
      }
    }
  }]
]);