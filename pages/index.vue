<template>
  <div>
    <div class="container">
      <slider/>
    </div>
    <div class="container">
        <div class="thumbnails-container">
            <thumbnails/>
        </div>
    </div>
  </div>
</template>

<script>
  import slider from '../components/slider.vue';
  import thumbnails from '../components/thumbnails.vue';

  export default {
    components: {
      slider,
      thumbnails,
    },
    head () {
      return {
        title: 'Главная',
      }
    },
  }
</script>

<style>
  .thumbnails-container {
    padding-top: 30px;
    padding-bottom: 50px;
  }

  @media (min-width: 1200px) {
    .thumbnails-container {
      padding-bottom: 100px;
    }
  }
</style>