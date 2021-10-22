// import {
//   initializeApp
// } from "firebase/app";
// import {
//   getAnalytics
// } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
  'use strict';
  var App = window.App || {};

  window.FirebaseConfig = {
    apiKey: "AIzaSyDArvVvYr_MpFYZwJQcoBx8cAe4qn7aYQE",
    authDomain: "coffeerun-8424e.firebaseapp.com",
    projectId: "coffeerun-8424e",
    storageBucket: "coffeerun-8424e.appspot.com",
    messagingSenderId: "447651193009",
    appId: "1:447651193009:web:1047cb8e4936b263034290",
    measurementId: "G-YK48NVGM7F"
  };

  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;


})(window);