import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAOxs1imKHIyb3H638KIQGvbMQ2MqpZkf8",
  authDomain: "wishlist-react-ae8ca.firebaseapp.com",
  projectId: "wishlist-react-ae8ca",
  storageBucket: "wishlist-react-ae8ca.appspot.com",
  messagingSenderId: "549872128497",
  appId: "1:549872128497:web:7dac55bfd8887ae0e3b450",
  databaseURL: "https://wishlist-react-ae8ca-default-rtdb.europe-west1.firebasedatabase.app/",
};
firebase.initializeApp(firebaseConfig);

export var db = firebase.database();