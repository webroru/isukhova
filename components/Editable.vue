<template>
  <div v-if="!edit"
    :class="{ ediatble: isEditable }"
    v-on:click="onEdit"
  >{{ text }}
  </div>
  <textarea
    v-else
    v-model="text"
    v-on:blur="save"
  />
</template>

<script>
import axios from 'axios';
import { fireDb } from '~/plugins/firebase.js'

export default {
  props: {
    text: String,
    key: String,
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
    };
  },
  methods: {
    isAdmin() {
      this.ediatble = true;
    },
    onEdit() {
      this.edit = true;
    },
    save() {
      this.edit = false;
    },
    async writeToFirestore() {
      const ref = fireDb.collection("test").doc("test");
      const document = {
        text: "This is a test message.",
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .ediatble:hover
    border 1px dashed
    cursor pointer
    box-sizing border-box
</style>