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
            <editable :text.sync="description" id="about"/>
            <!-- {{ description }} -->
            <!-- <p>Добрый день. Меня зовут Ирина Сухова. Я живу и работаю в солнечном г.Ростов-на-Дону.</p>
            <p>Основным направлением в моей работе являются детская и семейная фотосъемка.</p>
            <p>Самое главное для меня в фотографии — это живые эмоции, чтобы получились те самые снимки, которые вы будете рассматривать с удовольствием спустя много лет.</p>
            <p>На моем сайте вы можете ознакомиться с моим <nuxt-link to="/portfolio" class="indigo--text">портфолио</nuxt-link>, изучить <nuxt-link to="/price" class="indigo--text">пакеты услуг</nuxt-link>, почитать <nuxt-link to="/tips" class="indigo--text">рекомендации для съемок</nuxt-link>.</p>
            <p>Если вам понравились мои работы, не стесняйтесь, пишите и я буду рада познакомиться и сохранить историю в фотографиях для вашей семьи!!!</p> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Editable from '~/components/Editable';
  import { fireDb } from '~/plugins/firebase.js'

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
