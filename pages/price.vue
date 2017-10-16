<template>
  <v-container fluid grid-list-xl  v-bind:class="{ 'px-0': $vuetify.breakpoint.xsOnly }">
    <v-layout row>
      <v-flex xs12 md8 offset-md2>
        <v-layout row wrap>
          <v-flex xs12 md4 v-for="item in items" :key="item.title">
            <v-card height="100%">
              <v-card-media>
                <v-container fluid>
                  <v-layout>
                    <v-flex class="text-xs-center">
                      <h5>{{ item.title }}</h5>
                      <v-avatar size="100px" class="red lighten-3">
                        <span class="white--text headline">{{ item.price }}</span>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-divider></v-divider>
              <v-layout row class="ma-1" v-for="(feature, i) in item.features" :key="i">
                <v-flex xs1 sm2 class="text-xs-center">
                  <v-avatar size="25px">
                    <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                  </v-avatar>
                </v-flex>
                <v-flex xs11 sm10>
                  <div>{{ feature }}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 md8 offset-md2>
        <h3 id="walk" class="text-xs-center">{{ extra.title }}</h3>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-card height="100%">
              <v-card-media>
                <v-container fluid>
                  <v-layout>
                    <v-flex class="text-xs-center">
                      <v-avatar size="120px" class="red lighten-3">
                        <span class="white--text headline">{{ extra.price }}</span>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-divider></v-divider>
              <v-layout row class="ma-1" v-for="(feature, i) in extra.features" :key="i">
                <v-flex xs1 sm2 class="text-xs-center">
                  <v-avatar size="25px">
                    <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                  </v-avatar>
                </v-flex>
                <v-flex xs11 sm10>
                  <div>{{ feature }}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 md8 offset-md2>
        <h3 class="text-xs-center">Дополнительно можно заказать</h3>
        <v-layout row wrap>
          <v-flex>
            <ul>
              <li>ретушь фото — 150 ₽/фото</li>
              <li>срочная ретушь (в течении 2 недель) — 50% от стоимости пакета</li>
              <li>фотокниги — цена будет зависеть от размера книги</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const title = 'Условия и цены';
  export default {
    head () {
      return {
        title,
      }
    },
    data() {
      return {
        title,
        items: [
          {
            title: 'Минимальный',
            price: '3000 ₽',
            features: [
              'съемка в течении 1 часа',
              '10 снимков в ретуши',
              '25 фотографий в цветокоррекции',
              'передача фото через файлообменник (качество фотографий при этом сохраняется)',
              'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
            ],
          },
          {
            title: 'Оптимальный',
            price: '4000 ₽',
            features: [
              'съемка в течении 1 часа',
              '20 снимков в ретуши',
              '40-45 фото в цветокоррекции',
              'передача фото через файлообменник (качество фотографий при этом сохраняется) и на диске',
              'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
            ],
          },
          {
            title: 'Максимальный',
            price: '7000 ₽',
            features: [
              'съемка в течении 2 часов',
              '35-40 снимков в ретуши',
              'около 60 фото в цветокоррекции',
              'передача фото через файлообменник (качество фотографий при этом сохраняется) и на диске',
              'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
              'подходит для фотосъемки большой семьи',
            ],
          },
        ],
        extra: {
          title: 'Максимальный',
          price: '7000 ₽',
          features: [
            '15 фотографий в авторской художественной обработке',
            '80-100 в базовой цветокоррекции',
            'передача через файлообменник и на диске',
          ]
        },
      }
    },
  }
</script>
