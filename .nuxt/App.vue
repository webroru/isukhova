<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

import 'bootstrap/scss/bootstrap-grid.scss'

import 'bootstrap/scss/utilities/_flex.scss'

import '~/css/common.css'

import '~/css/container.css'

import '~/css/footer-container.css'

import '~/css/footer-copyright.css'

import '~/css/footer-menu.css'

import '~/css/header-container.css'

import '~/css/main-navigation.css'

import '~/css/menu-toggle.css'

import '~/css/search-form.css'

import '~/css/site-branding.css'

import '~/css/site-footer.css'

import '~/css/site-header.css'

import '~/css/site-info.css'

import '~/css/site-logo.css'

import '~/css/top-panel.css'

import '~/css/totop.css'


let layouts = {

  "_default": () => import('/var/www/html/layouts/default.vue'  /* webpackChunkName: "layouts/default" */)

}

export default {
  head: {"titleTemplate":"%s - Nuxt.js","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Comfortaa:400,700|Poiret+One|Roboto+Condensed:300,400,700&amp;subset=cyrillic"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/icon?family=Material+Icons"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

