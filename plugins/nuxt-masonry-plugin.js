import Vue from 'vue';

if (process.BROWSER_BUILD) {
  const VueMasonryPlugin = require('vue-masonry');
  Vue.use(VueMasonryPlugin);
}
