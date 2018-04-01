import * as firebase from "firebase";
require("firebase/firestore");
//import LeftMenu from './containers/LeftMenu';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCxNdqsVojsdHgvDs0HcUbLHn5HS7LL3lA",
  authDomain: "hscourseroad.firebaseapp.com",
  databaseURL: "https://hscourseroad.firebaseio.com",
  projectId: "hscourseroad",
  storageBucket: "hscourseroad.appspot.com",
  messagingSenderId: "780026167774"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;

// db.collection("users").add({
//     firstName: "Ada",
//     lastName: "Lovelace",
//     class: 2015
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });



