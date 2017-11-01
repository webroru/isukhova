<template>
  <Portfolio :images="items"></Portfolio>
</template>

<script>
  import Portfolio from '~/components/Portfolio.vue';

  export default {
    head () {
      return {
        title: 'Крещение',
      }
    },
    components: {
      Portfolio,
    },
    data() {
      return {
        items: [
          {
            thumbs: '/gallery/christening/1.jpg',
            image: '/gallery/christening/1_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/2.jpg',
            image: '/gallery/christening/2_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/3.jpg',
            image: '/gallery/christening/3_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/4.jpg',
            image: '/gallery/christening/4_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/5.jpg',
            image: '/gallery/christening/5_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/6.jpg',
            image: '/gallery/christening/6_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/7.jpg',
            image: '/gallery/christening/7_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/8.jpg',
            image: '/gallery/christening/8_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/9.jpg',
            image: '/gallery/christening/9_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/christening/10.jpg',
            image: '/gallery/christening/10_1200x800.jpg',
            dialog: false,
          },
        ],
      }
    },
  }
</script>
