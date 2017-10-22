<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex sm10 offset-sm1>
        <v-layout hidden-md-and-up>
          <v-flex>
            <v-layout>
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
                    <p>Добрый день. Меня зовут Ирина Сухова. Я живу и работаю в солнечном г.Ростов-на-Дону.</p>
                    <p>Основным направлением в моей работе являются детская и семейная фотосъемка.</p>
                    <p>Самое главное для меня в фотографии — это живые эмоции, чтобы получились те самые снимки, которые вы будете рассматривать с удовольствием спустя много лет.</p>
                    <p>На моем сайте вы можете ознакомиться с моим <nuxt-link to="/portfolio" class="indigo--text">портфолио</nuxt-link>, изучить <nuxt-link to="/price" class="indigo--text">пакеты услуг</nuxt-link>, почитать <nuxt-link to="/tips" class="indigo--text">рекомендации для съемок</nuxt-link>.</p>
                    <p>Если вам понравились мои работы, не стесняйтесь, пишите и я буду рада познакомиться и сохранить историю в фотографиях для вашей семьи!!!</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm6 md9>
            <v-layout row wrap>
              <v-flex xs12 md8>
                <v-card hover to="portfolio/family">
                  <v-card-media src="/gallery/family/1.jpg" height="389px">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline grey--text text--darken-1">Семейная съемка</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card hover to="/happy-new-year" height="389px" class="blue-grey darken-2 white--text">
                  <v-card-title primary-title>
                      <div class="headline">Новогодняя фотосессия</div>
                      <p>Совсем скоро наступит долгожданное для всех детей время года — зима. А где зима, там и Новый Год.</p>
                      <p>Новогодняя съемка давно стала традицией во многих семьях. Она объединяет, дарит праздничное настроение и оставляет после себя память на всю жизнь в виде фотографий...</p>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark>Подробнее</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card height="389px" class="red lighten-3 white--text">
                  <v-card-title primary-title>
                    <div class="headline">Как записаться на съемку:</div>
                    <ul>
                      <li>Посмотрите мое <nuxt-link to="/portfolio" class="indigo--text">портфолио</nuxt-link></li>
                      <li>Изучите <nuxt-link to="/price" class="indigo--text">прайс</nuxt-link></li>
                      <li>Напишите мне и мы определимся с датой съемки</li>
                      <li>Изучите условия съемки</li>
                      <li>Можете почитать статьи на моем сайте, чтобы было легче подготовиться к фотосессии</li>
                    </ul>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md8 hidden-sm-and-down>
                <v-card hover to="/portfolio/christening">
                  <v-card-media src="/gallery/christening/1.jpg" height="389px">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline grey--text text--darken-3">Крещение</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-layout row wrap style="height: 100%">
              <v-flex d-flex>
                <v-card hover to="/portfolio/pregnancy">
                  <v-card-media src="/gallery/pregnancy/1.jpg" height="800px">
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
                <v-card hover to="/portfolio/christening">
                  <v-card-media src="/gallery/christening/1.jpg" height="389px">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline grey--text text--darken-3">Крещение</span>
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
  </v-container>
</template>

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
