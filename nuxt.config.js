const { join } = require('path');

module.exports = {
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa:400,700|Poiret+One|Roboto+Condensed:300,400,700&amp;subset=cyrillic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },
  css: [
    // { src: 'bootstrap/scss/bootstrap-grid.scss', lang: 'scss' },
    'bootstrap/dist/css/bootstrap-grid.css',
    '~/css/common.css',
    '~/css/container.css',
    '~/css/footer-container.css',
    '~/css/footer-copyright.css',
    '~/css/footer-menu.css',
    // '~/css/grid.css',
    '~/css/header-container.css',
    '~/css/main-navigation.css',
    '~/css/menu-toggle.css',
    '~/css/search-form.css',
    '~/css/site-branding.css',
    '~/css/site-footer.css',
    '~/css/site-header.css',
    '~/css/site-info.css',
    '~/css/site-logo.css',
    '~/css/top-panel.css',
    '~/css/totop.css',
  ],
  build: {
    extractCSS: true,
  },
  plugins: [
    '~plugins/nuxt-swiper-plugin.js',
    '~plugins/nuxt-masonry-plugin.js',
  ],
  router: {
    linkActiveClass: 'current_page_item',
  },
};
