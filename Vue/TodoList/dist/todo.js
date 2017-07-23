(function(global, Vue){
 'use strict' 
 
 //firebase 초기 설정.
  let config = {
    apiKey: "AIzaSyB1HAVHUdOrQBxXeyNmY3AzFkW8hrVtTps",
    authDomain: "vue-planlist-85b96.firebaseapp.com",
    databaseURL: "https://vue-planlist-85b96.firebaseio.com",
    projectId: "vue-planlist-85b96",
    storageBucket: "vue-planlist-85b96.appspot.com",
    messagingSenderId: "137140748409"
  };
  firebase.initializeApp(config);
  let firebase_db = firebase.database();

  function addTodo(){
    firebase.database().ref('todolist/').set({
             task: [{
               content:'test!!',
               complete: false
             }], 
             complete : [{
               content:'test??',
               complete: true
             }]         
              })
  };
  
  addTodo();
  
  // let app = new Vue({
  //   el: '#app',
  //   data:{
  //     todo : {
  //       active:[],
  //       completed :[]
  //     }
  //  },
  //  computed:{},
  //  methods: {} 
  // })

  
})(window, window.Vue);