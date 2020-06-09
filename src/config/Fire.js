import firebase from 'firebase';
import Rebase from 're-base';


const config = {
    apiKey: "AIzaSyCxsv4y868zkAL-d13UqdeiaKs7MRSGpK8",
    authDomain: "dominiksite-2841e.firebaseapp.com",
    databaseURL: "https://dominiksite-2841e.firebaseio.com",
    projectId: "dominiksite-2841e",
    storageBucket: "dominiksite-2841e.appspot.com",
    messagingSenderId: "844680785618",
    appId: "1:844680785618:web:6b61ee1c1fb0bc57a6870b",
    measurementId: "G-074D69LJ96"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config)
  const base = Rebase.createClass(fire.database())
  const firestore =firebase.database();
  export  { fire, base, firestore}
