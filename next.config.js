const plugins = require('next-compose-plugins');
const sass  = require('@zeit/next-sass');

const nextConfig = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
}

module.exports = plugins([
  [sass],
], nextConfig);