import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyC658Q20hVgv8zTQ-mQ4GsgqZg4PulFI78",
    authDomain: "catch-of-the-day-1edee.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1edee.firebaseio.com",
    projectId: "catch-of-the-day-1edee",
    storageBucket: "catch-of-the-day-1edee.appspot.com",
    messagingSenderId: "931444848472",
    appId: "1:931444848472:web:8b3526b47ac02c50fa572d",
    measurementId: "G-CC1339VZM8"
  });

const base = Rebase.createClass(firebase.database());


export { firebaseApp };

export default base;
