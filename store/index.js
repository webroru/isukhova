import Vuex from 'vuex';
import firebase, { auth, GoogleProvider } from '~/plugin/firebase.js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
    },
    getters: {
      activeUser: (state, getters) => state.user,
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
    },
    actions: {
      autoSignIn({ commit }, payload) {
        commit('setUser', payload);
      },
      signInWithGoogle({ commit }) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider);
          resolve();
        });
      },
      signOut({ commit }) {
        auth.signOut().then(() => {
          commit('setUser', null);
        }).catch((err) => console.log(err));
      },
    },
  });
};

export default createStore;
