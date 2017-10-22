<template>
  <v-container fluid>
    <v-layout>
      <v-flex sm10 offset-sm1>
        <v-container grid-list-xl v-bind:class="{ 'pa-0': $vuetify.breakpoint.xsOnly }">
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="item in items" :key="item.image">
              <v-card hover tile slot="activator" @click.native.stop="item.dialog = true">
                <v-card-media :src="item.thumbs" class="white--text" height="400px">
                </v-card-media>
              </v-card>
              <v-dialog v-model="item.dialog" lazy fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-card hover @click.native="item.dialog = false">
                  <v-toolbar style="flex: 0 0 auto;">
                    <v-btn icon @click.native="item.dialog = false">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-media :src="item.image" contain height="calc(100vh - 64px)"></v-card-media>
                </v-card>
              </v-dialog>
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
        title: 'Беременность',
      }
    },
    data() {
      return {
        items: [
          {
            thumbs: '/gallery/pregnancy/1.jpg',
            image: '/gallery/pregnancy/1_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/2.jpg',
            image: '/gallery/pregnancy/2_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/3.jpg',
            image: '/gallery/pregnancy/3_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/4.jpg',
            image: '/gallery/pregnancy/4_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/5.jpg',
            image: '/gallery/pregnancy/5_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/6.jpg',
            image: '/gallery/pregnancy/6_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/7.jpg',
            image: '/gallery/pregnancy/7_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/8.jpg',
            image: '/gallery/pregnancy/8_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/9.jpg',
            image: '/gallery/pregnancy/9_1200x800.jpg',
            dialog: false,
          },
        ],
      }
    },
  }
</script>
