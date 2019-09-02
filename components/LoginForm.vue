<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <div v-if="!mySession">
        <h2 class="title">Sign In with Google</h2>
        <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
      </div>
      <div v-else>
        <h2 class="title">Sign Out</h2>
        <v-btn class="signIn mb-2" primary @click.native="googleSignOut">Google Sign Out</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        formEmail: '',
        formPassword: '',
      };
    },
    computed: {
      mySession() {
        return this.$store.getters.activeUser;
      },
    },
    methods: {
      emailLogin() {
        this.$store.dispatch('signInWithEmail', {
          email: this.formEmail,
          password: this.formPassword,
        }).then(() => {
          this.formEmail = '';
          this.formPassword = '';
        }).catch((e) => {
          console.log(e.message);
        });
      },
      googleSignUp() {
        this.$store.dispatch('signInWithGoogle').then(() => {
          console.log('inside then statement on login');
        }).catch((e) => {
          console.log(e.message);
        });
      },
      googleSignOut() {
        this.$store.dispatch('signOut');
      },
    },
  };
</script>
