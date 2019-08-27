import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDgkmKSOti83FcvhRRUy3-xxZQ-24S0IYU',
    authDomain: 'isukhova.firebaseapp.com',
    databaseURL: 'https://isukhova.firebaseio.com',
    projectId: 'isukhova',
    storageBucket: '',
    messagingSenderId: '426547357607',
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}
const fireDb = firebase.firestore();
export { fireDb };
