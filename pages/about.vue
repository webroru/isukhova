<template>
  <v-container fluid>
    <v-layout >
      <v-flex sm12>
        <h2 class="text-sm-center">Обо мне</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-layout row wrap>
          <v-flex xs12 md4 text-xs-center layout align-center justify-center>
            <v-avatar class="ma-4" size="200px">
              <img src="/about.jpg" alt="Ирина Сухова">
            </v-avatar>
          </v-flex>
          <v-flex xs12 md8>
            <editable :text="description" page="about" field="text"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Editable from '~/components/Editable';
  import { fireDb } from '~/plugins/firebase.js';

  export default {
    components: {
      Editable,
    },
    head() {
      return {
        title: 'Обо мне',
      };
    },
    async asyncData({ app, params, error }) {
      const ref = fireDb.collection('pages').doc('about');
      let snap;
      try {
        snap = await ref.get();
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      return {
        description: snap.data().text,
      };
    },
  };
</script>
