module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Marck+Script|Neucha|Bad+Script|Comfortaa:400,700|Poiret+One|Roboto:300,400,500,700|Material+Icons&amp;subset=cyrillic' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify']
  },
  plugins: ['~plugins/vuetify.js'],
  css: [
    { src: '~assets/style/app.styl', lang: 'styl' }
  ]
}
