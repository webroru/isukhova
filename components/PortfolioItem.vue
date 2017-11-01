<template>
  <v-flex xs12 sm6 md4>
      <v-card hover tile slot="activator" @click.native.stop="image.dialog = true">
      <v-card-media :src="$vuetify.breakpoint.smAndUp ? image.thumbs : null" class="white--text" :height="$vuetify.breakpoint.smAndUp ? '400px': 'auto'">
          <img :src="image.thumbs" class="hidden-sm-and-up" style="align-self: center">
      </v-card-media>
      </v-card>
      <v-dialog v-model="image.dialog" lazy fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-card hover @click.native="image.dialog = false">
          <v-toolbar style="flex: 0 0 auto;">
          <v-btn icon @click.native="image.dialog = false">
              <v-icon>close</v-icon>
          </v-btn>
          </v-toolbar>
          <v-card-media :src="image.image" contain height="calc(100vh - 64px)"></v-card-media>
      </v-card>
      </v-dialog>
  </v-flex>
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        required: true,
      }
    }
  }
</script>
