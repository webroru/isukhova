<template>
  <div v-if="!edit"
    :class="{ ediatble: mySession }"
    @click="onEdit"
  >
    <proxy :html="content" />
  </div>
  <textarea
    v-else
    v-model="content"
    @blur="save"
  />
</template>

<script>
import axios from 'axios';
import { fireDb } from '~/plugins/firebase.js'
import Proxy from '~/components/Proxy';

export default {
  components: {
    Proxy,
  },
  props: {
    text: String,
    page: String,
    field: String,
  },
  computed: {
    mySession() {
      return this.$store.getters.activeUser;
    },
  },
  data() {
    return {
      ediatble: false,
      edit: false,
      content: this.text,
    };
  },
  methods: {
    isAdmin() {
      this.ediatble = true;
    },
    onEdit() {
      if (!this.mySession) return;
      this.edit = true;
    },
    async save() {
      const ref = fireDb.collection('pages').doc(this.page);
      const document = {};
      document[this.field] = this.content;
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.edit = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  textarea
    width 100%
    height 100px

  .ediatble:hover
    border 1px dashed
    cursor pointer
    box-sizing border-box
</style>