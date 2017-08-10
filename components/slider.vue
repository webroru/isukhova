<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        banners: [
          '/1.jpg',
          '/2.jpg',
          '/3.jpg'
        ],
        swiperOption: {
          autoplay: 5000,
          direction : 'horizontal',
          initialSlide: 1,
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        }
      };
    },
  }
</script>

<style lang="css" scoped>
  .swiper-container:hover .swiper-button-prev, .swiper-container:hover .swiper-button-next {
    opacity: 1;
  }

  .swiper-button-prev, .swiper-button-next {
    background-color: rgba(255, 255, 255, 0.4);
    background-size: 14px 24px;
    opacity: 0;
    transition: .3s;
    width: 44px;
  }

  .swiper-button-prev:hover {
    background-color: rgba(255, 255, 255, 1);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next:hover {
    background-color: rgba(255, 255, 255, 1);
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
  }
</style>
