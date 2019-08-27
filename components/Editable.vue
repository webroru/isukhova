<template>
  <div v-if="!edit"
    :class="{ ediatble: isEditable }"
    @click="onEdit"
  >{{ content }}
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

export default {
  props: {
    text: String,
    id: String,
  },
  computed: {
    isEditable() {
      return true;
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
      this.edit = true;
    },
    async save() {
      const ref = fireDb.collection('pages').doc(this.id);
      const document = {
        text: this.content,
      };
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