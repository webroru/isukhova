<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex sm10 offset-sm1>
        <v-container grid-list-xl fill-height v-bind:class="{ 'pa-0': $vuetify.breakpoint.xsOnly }">
          <v-layout row wrap align-center>
            <v-flex md4 v-for="item in items" :key="item.title">
              <v-card hover tile :to="item.path">
                <v-card-media :src="item.image" class="white--text" height="400px">
                </v-card-media>
                <v-card-title primary-title>
                  <h3 class="headline mb-0">{{ item.title }}</h3>
                </v-card-title>              
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Портфолио',
      }
    },
    data() {
      return {
        items: [
          {
            image: '/gallery/family/1.jpg',
            title: 'Семья и дети',
            path: '/portfolio/family'
          },
          {
            image: '/gallery/pregnancy/1.jpg',
            title: 'Беременность',
            path: '/portfolio/pregnancy'
          },
          {
            image: '/gallery/christening/8.jpg',
            title: 'Крещение',
            path: '/portfolio/christening'
          },
        ],
      }
    },
  }
</script>
