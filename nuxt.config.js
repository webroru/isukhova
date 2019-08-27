module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Семейный и детский фотограф' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Material+Icons&amp;subset=cyrillic' },
    ],
  },
  loading: { color: '#3B8070' },
  build: {
    vendor: [
      'vuetify',
      'axios',
    ],
  },
  modules: [
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'http://isukhova.ru',
    generate: true,
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/firebase.js',
    { src: '~/plugins/ga.js', ssr: false },
  ],
  css: [
    { src: '~/assets/style/app.styl', lang: 'styl' },
  ],
};
