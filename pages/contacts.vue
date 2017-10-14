<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex sm12>
        <h2 class="text-md-center">Контактная информация</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title>
            <div>Для того, чтобы заказать фотосессию, узнать о свободных датах или задать интересующие вопросы, свяжитесь со мной по контактам, указанным ниже:</div>
          </v-card-title>
          <v-list two-line>
            <v-list-tile href="tel:+79198840474">
              <v-list-tile-action>
                <v-icon class="indigo--text">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>+7(919)884-04-74</v-list-tile-title>
                <v-list-tile-sub-title>Телефон/WhatsApp</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile href="mailto:isukhova@yandex.ru">
              <v-list-tile-action>
                <v-icon class="indigo--text">email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>isukhova@yandex.ru</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile href="https://www.instagram.com/_irina.sukhova_/">
              <v-list-tile-action>
                <v-icon class="indigo--text">star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>@_irina.sukhova_</v-list-tile-title>
                <v-list-tile-sub-title>Instagram</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="indigo--text">location_on</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>г. Ростов-на-Дону</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Контакты',
      }
    }
  }
</script>
