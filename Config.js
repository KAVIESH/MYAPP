import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDMHeikgv_f6UQTyxFC4Hn5BxiiAMN80nc",
    authDomain: "my-pet-7a4a0.firebaseapp.com",
    projectId: "my-pet-7a4a0",
    storageBucket: "my-pet-7a4a0.appspot.com",
    messagingSenderId: "438938933570",
    appId: "1:438938933570:web:116f6a088fa7401c6990db"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase.firestore();