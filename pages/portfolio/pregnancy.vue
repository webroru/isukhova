<template>
  <Portfolio :images="items"></Portfolio>
</template>

<script>
  import Portfolio from '~/components/Portfolio.vue';

  export default {
    head () {
      return {
        title: 'Беременность',
      }
    },
    components: {
      Portfolio,
    },
    data() {
      return {
        items: [
          {
            thumbs: '/gallery/pregnancy/1.jpg',
            image: '/gallery/pregnancy/1_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/2.jpg',
            image: '/gallery/pregnancy/2_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/3.jpg',
            image: '/gallery/pregnancy/3_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/4.jpg',
            image: '/gallery/pregnancy/4_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/5.jpg',
            image: '/gallery/pregnancy/5_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/6.jpg',
            image: '/gallery/pregnancy/6_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/7.jpg',
            image: '/gallery/pregnancy/7_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/8.jpg',
            image: '/gallery/pregnancy/8_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/pregnancy/9.jpg',
            image: '/gallery/pregnancy/9_1200x800.jpg',
            dialog: false,
          },
        ],
      }
    },
  }
</script>
