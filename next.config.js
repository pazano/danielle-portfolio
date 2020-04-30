const withSass = require('@zeit/next-sass');
module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/how-we-met': { page: '/how-we-met'},
      '/our-day': { page: '/our-day' },
      '/our-honeymoon': { page: '/our-honeymoon' },
      '/peep-the-pics': { page: '/peep-the-pics' },
      '/when-where': { page: '/when-where' },
      '/faqs': { page: '/faqs' },
      '/registry': { page: '/registry' },
    }
  }
});