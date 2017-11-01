<template>
  <Portfolio :images="items"></Portfolio>
</template>

<script>
  import Portfolio from '~/components/Portfolio.vue';

  export default {
    head () {
      return {
        title: 'Семья дети',
      }
    },
    components: {
      Portfolio,
    },
    data() {
      return {
        items: [
          {
            thumbs: '/gallery/family/1.jpg',
            image: '/gallery/family/1_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/2.jpg',
            image: '/gallery/family/2_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/3.jpg',
            image: '/gallery/family/3_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/4.jpg',
            image: '/gallery/family/4_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/5.jpg',
            image: '/gallery/family/5_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/6.jpg',
            image: '/gallery/family/6_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/7.jpg',
            image: '/gallery/family/7_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/8.jpg',
            image: '/gallery/family/8_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/9.jpg',
            image: '/gallery/family/9_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/10.jpg',
            image: '/gallery/family/10_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/11.jpg',
            image: '/gallery/family/11_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/12.jpg',
            image: '/gallery/family/12_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/13.jpg',
            image: '/gallery/family/13_1200x800.jpg',
            dialog: false,
          },
          {
            thumbs: '/gallery/family/14.jpg',
            image: '/gallery/family/14_1200x800.jpg',
            dialog: false,
          },
        ],
      }
    },
  }
</script>
