<template>
    <div class="masonry">

        <!--<nuxt-link to="/price">Прайс</nuxt-link>-->
        <a class="item" v-for="thumb in thumbs">
            <img :src="thumb.img">

            <div class="caption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>

        </a>



        <a href="" class="item">
            <img src="/1_570.jpg" alt="">
            <div class="caption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </a>
        <a href="" class="item">
            <img src="/2_570.jpg" alt="">
            <div class="caption">
                Lorem ipsum dolor.
            </div>
        </a>
        <a href="" class="item">
            <img src="/3_570.jpg" alt="">
            <div class="caption">
                Lorem ipsum dolor.
            </div>
        </a>
        <a href="" class="item">
            <img src="/4_570.jpg" alt="">
            <div class="caption">
                Lorem ipsum dolor sit.
            </div>
        </a>
        <a href="" class="item">
            <img src="/5_570.jpg" alt="">
            <div class="caption">
                Lorem ipsum dolor sit.
            </div>
        </a>
        <a href="" class="item">
            <img src="/6_570.jpg" alt="">
            <div class="caption">Lorem ipsum dolor sit.</div>
        </a>
        <a href="" class="item">
            <img src="/7_570.jpg" alt="">
            <div class="caption">Lorem ipsum dolor sit.</div>
        </a>
        <a href="" class="item">
            <img src="/8_570.jpg" alt="">
            <div class="caption">Lorem ipsum dolor sit.</div>
        </a>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        thumbs: [
          {
            url: '/',
            img: '/1_570.jpg',
            desc: 'lorem',

          },
          '/1_570.jpg',
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
  .masonry {
    column-count: 3;
    column-gap: 1em;
  }

  .item {
    display: inline-block;
    margin: 0 0 1em;
    position: relative;
    width: 100%;
  }

  .item img {
    width: 100%;
  }

  .caption {
    color: #0b0b0b;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    top: 50%;
    left: 10%;
    right: 10%;
    font-size: 32px;
    padding: 20px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    /*border: 1px double rgba(255, 255, 255, 0.4);*/
  }

  .caption:before {
    content: '';
    border: 1px solid rgba(255, 255, 255, 0.4);
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
  }

  .caption:after {
    content: '';
    border: 1px solid rgba(255, 255, 255, 0.4);
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
  }

  .item:hover .caption {
    transition: 0.5s ease-in-out;
    right: 18px;
    left: 9px;
  }
</style>
