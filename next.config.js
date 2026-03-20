const path = require('path');

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'cdn.builder.io',
    ],
  },
}