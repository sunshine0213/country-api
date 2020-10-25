import Vue from 'vue'

import firebase from 'firebase/app';
import 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyCOc9xqW5KRMJ6mu11ISkECNOujbxd9saw",
  authDomain: "vue-lets-do.firebaseapp.com",
  databaseURL: "https://vue-lets-do.firebaseio.com",
  projectId: "vue-lets-do",
  storageBucket: "vue-lets-do.appspot.com",
  messagingSenderId: "1002789362776",
  appId: "1:1002789362776:web:98538f580b13eb9d677e2d"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()