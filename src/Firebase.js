import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "tomflatterssite.firebaseapp.com",
    databaseURL: "https://tomflatterssite.firebaseio.com",
    projectId: "tomflatterssite",
    storageBucket: "tomflatterssite.appspot.com",
    messagingSenderId: "409191372681",
    appId: "1:409191372681:web:cf8072125b0787350c7358",
    measurementId: "G-7FH80Z6YP5"
  };

firebase.initializeApp(firebaseConfig)

export var db = firebase.firestore()
export var storage = firebase.storage()
export var auth = firebase.auth()
