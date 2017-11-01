<template>
  <v-container fluid>
    <v-layout>
      <v-flex sm10 offset-sm1>
        <v-container grid-list-xl v-bind:class="{ 'pa-0': $vuetify.breakpoint.xsOnly }">
          <v-layout row wrap>
            <PortfolioItem v-for="item in images" :key="item.image" :image="item"></PortfolioItem>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PortfolioItem from '~/components/PortfolioItem.vue';

  export default {
    components: {
      PortfolioItem,
    },  
    props: {
      images: {
        type: Array,
        required: true,
      }
    }
  }
</script>