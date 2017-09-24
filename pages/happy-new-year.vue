<template>
  <v-container fluid class="grey lighten-4">
    <v-layout>
      <v-flex sm12>
        <h2 class="text-sm-center" v-text="title"></h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <p>Совсем скоро наступит долгожданное для всех детей время года — зима. А где зима, там и Новый Год.</p>
        <p>Новогодняя съемка давно стала традицией во многих семьях. Она объединяет, дарит праздничное настроение и оставляет после себя память на всю жизнь в виде фотографий.</p>
        <v-list three-line>
          <v-subheader class="grey--text text--darken-3">Хотелось бы дать несколько советов о том как подготовиться к новогдней фотосессии:</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue-grey--text text--darken-2">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Выбор места для съемки</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-3">Съемка должна быть близка вам по духу и если вы не любите студии, не насилуйте себя, есть и другие варианты, например, домашняя съемка, либо это может быть уличная.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue-grey--text text--darken-2">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>У вас есть домашние животные???</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-3">Прекрасно, берите их с собой) Только не забудьте предупредить об этом заранее.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue-grey--text text--darken-2">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Подумайте об одежде заранее</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-3">Конечно никто вас не может заставить прийти в чем-то конкретном, но прислушавшись к паре советов по подборе образов - результат фотосесии будет гораздо лучше. Здесь вы можете посмотреть рекомендации по подбору образов, цветов для вашей фотосесии.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue-grey--text text--darken-2">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Не забывайте улыбаться, веселиться и получать удовольствие</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-3">Фотосессия получится более удачной, волшебной, если и у вас самих будет праздничное настроение.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue-grey--text text--darken-2">star</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Если фотосессия с ребенком</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-3">не обязательно его постоянно одергивать, чтобы он стоял по стойке смирно, смотрел на незнакомую «тетю» и улыбался в камеру. Нервничаете вы — нервничает ребенок, и не забываем о том, что фотосессия с детьми это совместная работа фотографа и родителей. Ведь только вы знаете как рассмешить ребенка или успокоить)</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const title = 'Новогодняя фотосессия';
  export default {
    head () {
      return {
        title,
      }
    },
    data() {
      return {
        title,
      }
    },
  }
</script>
