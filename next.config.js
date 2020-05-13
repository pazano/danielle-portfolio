const plugins = require('next-compose-plugins');
const sass  = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  }
}

module.exports = plugins([
  [sass],
  [optimizedImages, {
    handleImages: ['jpeg'],
    optimizeImagesInDev: true,
    imagesFolder: 'images',
    mozjpeg: {
      quality: 80,
    },
    responsive: {
      sizes: [300, 600, 1200, 2000],
      placeholder: true,
      placeholderSize: 50,
      adapter: require('responsive-loader/sharp')
    }
  }]
], nextConfig);