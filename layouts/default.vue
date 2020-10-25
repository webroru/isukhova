<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list>
        <v-list-tile exact nuxt v-for="(item, i) in items" :key="i" :to="item.path">
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text" class="grey--text text--darken-4"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar light fixed app>
      <v-toolbar-title>
        <nuxt-link to="/" class="grey--text text--darken-4" style="text-decoration: none">iSukhova</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
        <v-btn flat exact nuxt :to="item.path">{{ item.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main  class="grey lighten-4">
      <v-content>
        <nuxt />
      </v-content>
    </main>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<style>
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          {
            text: 'Главная',
            path: '/',
          },
          {
            text: 'Портфолио',
            path: '/portfolio',
          },
          {
            text: 'Обо мне',
            path: '/about',
          },
          {
            text: 'Прайс',
            path: '/price',
          },
          {
            text: 'FAQ',
            path: '/faq',
          },
          {
            text: 'Контакты',
            path: '/contacts',
          },
        ],
        title: 'Vuetify.js'
      }
    }
  }
</script>
