<template>
    <div>
      <!-- <v-carousel icon="stop" style="height: 720px">
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
      </v-carousel> -->

      <v-container fluid grid-list-xl class="grey lighten-4">
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex xs12 sm6 md9>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <v-card hover>
                          <v-card-media src="/gallery/image0009.jpg" height="389px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline white--text">Семейная съемка</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                        </v-card>
                      </v-flex>
                      <v-flex xs12 md4>
                        <nuxt-link to="/happy-new-year" class="card-link">
                          <v-card hover height="389px" class="blue-grey darken-2 white--text">
                            <v-card-title primary-title>
                              <div class="headline">Новогодняя фотосессия</div>
                              <p>Совсем скоро наступит долгожданное для всех детей время года — зима. А где зима, там и Новый Год.</p>
                              <p>Новогодняя съемка давно стала традицией во многих семьях. Она объединяет, дарит праздничное настроение и оставляет после себя память на всю жизнь в виде фотографий...</p>
                            </v-card-title>
                            <v-card-actions>
                              <v-btn flat dark nuxt to="happy-new-year">Подробнее</v-btn>
                            </v-card-actions>
                          </v-card>
                        </nuxt-link>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex d-flex>
                    <v-layout row wrap>
                      <v-flex xs12 md4>
                        <v-card hover height="389px" class="red lighten-3 white--text">
                          <v-card-title primary-title>
                            <div class="headline">Мой Instagram:</div>
                            <v-btn flat href="https://www.instagram.com/_irina.sukhova_/">@_irina.sukhova_</v-btn>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                      <v-flex xs12 md8 hidden-sm-and-down>
                        <v-card hover>
                          <v-card-media src="/gallery/image1227.jpg" height="389px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline grey--text text--darken-3">Детская съемка</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <v-layout row wrap style="height: 100%">
                  <v-flex d-flex>
                    <v-card hover>
                      <v-card-media src="/gallery/image00001.jpg" height="800px">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline grey--text text--darken-1">Фотосессия беременности</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex hidden-md-and-up>
                    <v-card hover>
                      <v-card-media src="/gallery/imag0049.jpg" height="389px">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline grey--text text--darken-3">Выездная фотосесссия в Праге</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex xs12 sm6 md3>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <v-card hover>
                      <v-card-media src="/gallery/imag0056.jpg" height="808px">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline white--text">Чешская национальная кухня</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>
                  </v-flex>
                  <v-flex d-flex hidden-md-and-up>
                    <v-card hover>
                      <v-card-media src="/gallery/imag0049.jpg" height="389px">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span class="headline grey--text text--darken-3">Выездная фотосесссия в Праге</span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm6 md9>
                <v-layout row wrap>
                  <v-flex d-flex>
                    <v-layout row wrap>
                      <v-flex xs12 md8>
                        <v-card hover>
                          <v-card-media src="/gallery/imag0142.jpg" height="389px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline white--text">Фотосессия в трамвае</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                        </v-card>
                      </v-flex>
                      <v-flex xs12 md4>
                        <v-card hover height="389px" class="blue-grey darken-2 white--text">
                          <v-card-title primary-title>
                            <div class="headline">Новогодняя фотосессия</div>
                            <div>Совсем скоро наступит долгожданное для всех детей время года — зима. А где зима, там и Новый Год.</div>
                            <div>Новогодняя съемка давно стала традицией во многих семьях. Она объединяет, дарит праздничное настроение и оставляет после себя память на всю жизнь в виде фотографий...</div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat dark>Подробнее</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex d-flex>
                    <v-layout row wrap>
                      <v-flex xs12 md4>
                        <v-card hover height="389px" class="grey darken-1 white--text">
                          <v-card-title primary-title>
                            <div class="headline">Если это ваша первая съемка:</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem, deserunt obcaecati reiciendis repudiandae! Ab accusantium dicta dolorem exercitationem ipsum minus nobis pariatur, perferendis quod quos, sequi temporibus vitae.</div>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn flat dark>Еще советы</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                      <v-flex xs12 md8 hidden-sm-and-down>
                        <v-card hover>
                          <v-card-media src="/gallery/imag0049.jpg" height="389px">
                            <v-container fill-height fluid>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span class="headline grey--text text--darken-3">Выездная фотосесссия в Праге</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card-media>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<<style scoped>
.card-link {
  text-decoration: none;
}
</style>


<script>
  export default {
    head () {
      return {
        title: 'Фотограф Ирина Сухова',
      }
    },
    data () {
      return {
        items: [
          {
            src: '/carousel/1.jpg',
          },
          {
            src: '/carousel/2.jpg',
          },
          {
            src: '/carousel/3.jpg',
          },
        ],
      }
    }
  }
</script>
