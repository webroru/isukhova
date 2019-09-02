import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDgkmKSOti83FcvhRRUy3-xxZQ-24S0IYU',
    authDomain: 'isukhova.firebaseapp.com',
    databaseURL: 'https://isukhova.firebaseio.com',
    projectId: 'isukhova',
    storageBucket: 'isukhova.appspot.com',
    messagingSenderId: '426547357607',
    appId: '1:426547357607:web:0bd4f3f4e033ff58',
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

export const fireDb = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
