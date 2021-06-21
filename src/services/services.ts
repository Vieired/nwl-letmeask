import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAERnfUbZD3VZHMsmBKGi1FhFPL56OH4t4",
    authDomain: "letmeask-f4393.firebaseapp.com",
    databaseURL: "https://letmeask-f4393-default-rtdb.firebaseio.com",
    projectId: "letmeask-f4393",
    storageBucket: "letmeask-f4393.appspot.com",
    messagingSenderId: "737818811285",
    appId: "1:737818811285:web:18fc78b5d05747d83cf49c"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();