<template>
  <div>
    <div class="container">
        <div class="thumbnails-container">
            <thumbnails/>
        </div>
    </div>
  </div>
</template>

<script>
  import thumbnails from '../components/thumbnails.vue';

  export default {
    components: {
      thumbnails,
    },
    head () {
      return {
        title: 'Портфолио',
      }
    },
  }
</script>

<style lang="css" scoped>
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
