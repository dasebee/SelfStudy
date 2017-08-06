
import firebase from 'firebase';  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQQVnCBvBQO-ANmMhkJki3zlvNqlHbb6M",
    authDomain: "web-todolist-d4f66.firebaseapp.com",
    databaseURL: "https://web-todolist-d4f66.firebaseio.com",
    projectId: "web-todolist-d4f66",
    storageBucket: "web-todolist-d4f66.appspot.com",
    messagingSenderId: "1056742372951"
  };
  firebase.initializeApp(config);

  export default {
    firebase : firebase.database()
  }