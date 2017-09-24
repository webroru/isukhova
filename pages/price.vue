<template>
  <v-container fluid class="grey lighten-4">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h3 id="studio" class="text-sm-center">Студия</h3>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md4>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Минимальный</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">3000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in studio.minimal">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Оптимальный</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">4000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in studio.optimal">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Максимальный</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">7000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in studio.maximal">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <h3 id="walk" class="text-sm-center">Фотопрогулка</h3>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 md3>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Минимальный</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">3000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in walk.minimal">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Оптимальный</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">4500 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in walk.optimal">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Оптимальный+</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">6000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in walk.optimalPlus">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card height="100%">
                <v-card-media>
                  <v-container fluid>
                    <v-layout>
                      <v-flex class="text-sm-center">
                        <h4>Оптимальный+</h4>
                        <v-avatar size="100px" class="red lighten-3">
                          <span class="white--text headline">6000 ₽</span>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-divider></v-divider>
                <template v-for="item in walk.optimalPlus">
                  <v-layout align-center row class="ma-1">
                    <v-flex xs2 class="text-xs-center">
                      <v-avatar size="36px">
                        <v-icon class="blue-grey--text text--darken-2">done</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                      <div v-text="item"></div>
                    </v-flex>
                  </v-layout>
                </template>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <h3 class="text-sm-center">Дополнительно можно заказать</h3>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex>
              <ul>
                <li>дополнительная ретушь фото — 150₽/фото</li>
                <li>срочная ретушь (в течении 2 недель) — 50% от стоимости пакета</li>
                <li>фотокниги — цена будет зависеть от размера книги</li>
              </ul>
            </v-flex>
          </v-layout>
        </v-container>
        <h3 id="report" class="text-sm-center">Репортаж</h3>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex>
              <ul>
                <li>3000₽/час, минимум 2 часа</li>
                <li>Фотографии проходят только цветокоррекцию</li>
                <li>Передача через файлообменник (качество фото при этом сохраняются)</li>
              </ul>
            </v-flex>
          </v-layout>
        </v-container>
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
        studio: {
          minimal: [
            'съемка в течении 1 часа',
            '12 снимков в ретуши',
            '30 фотографий без ретуши и цветокоррекции (исходники) в формате jpeg',
            'передача фото через файлообменник (качество фотографий при этом сохраняется)',
            'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
          ],
          optimal: [
            'съемка в течении 1 часа',
            '15 снимков в ретуши',
            '25—30 фото в цветокоррекции',
            'передача фото через файлообменник (качество фотографий при этом сохраняется) и на диске',
            'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
          ],
          maximal: [
            'съемка в течении 2 часов',
            '30 снимков в ретуши',
            'около 50—60 фото в цветокоррекции',
            'передача фото через файлообменник (качество фотографий при этом сохраняется) и на диске',
            'аренда студии оплачивается отдельно (в среднем по городу 1т.р./час)',
            'подходит для фотосъемки большой семьи',
          ],
        },
        walk: {
          minimal: [
            'съемка в течении 1—1.5 часов',
            '12 снимков в ретуши',
            'передача фото через файлообменник (качество фотографий при этом сохраняется)',
          ],
          optimal: [
            'съемка в течении 1.5 часов',
            '20 снимков в ретуши',
            'около 30 фото в цветокоррекции',
            'передача фото через файлообменник (качество фотографий при этом сохраняется) и на оформленном диске',
          ],
          optimalPlus: [
            'съемка в течении 1.5—2 часов',
            '25—30 снимков в ретуши',
            'около 45 фото в цветокоррекции',
            'передача фото через файлообменник (качество фотографий при этом сохраняется) и на оформленном диске',
          ],
          maximal: [
           'съемка в течении 3 часов (съемка может происходить в абсолютно разных локациях: дом, кафе, улица, парки)',
           '40 снимков в ретуши',
           'около 70 фото в цветокоррекции',
           'передача фото через файлообменник (качество фотографий при этом сохраняется) и на оформленном диске',
          ],
        },
      }
    },
  }
</script>
