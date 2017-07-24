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
//   let data ={             
//     task: [], 
//     complete : []
//   }         

//   function addTodo(){
//     firebase.database().ref('todolist/').set(
//       data);}
  
//   addTodo();
  
// firebase.database().ref('todolist/').once('value', function(res){
//   res.forEach(function(todo){
//     console.log(todo);
//   })
// })
  
  let app = new Vue({
    el: '#app',
    created(){
      this.getToDoData();
    },
    data:{
      todos : [],
      input_value : ''
    },
    computed:{},
    methods: {
      getToDoData(){
        //todos 배열 초기화
        this.todos = [];
        // //db의 data를 가져와서 배열에 push
        firebase.database().ref().once('value', (snapshot)=>{
          snapshot.forEach((todo)=>{
            //db에서 가져온 데이터에 key값을 합치기.
            this.todos.push(Object.assign(todo.val(),{key: todo.key}))
          })
        });
      },
      inputValue(e){
        //input에 입력된 값을 저장. 
        this.input_value = e.target.value.trim();
      },
      addTodoData(){
        if(this.input_value === ''){ throw '값을 입력해주세요.' }
        firebase.database().ref().push({
          content: this.input_value,
          complete: false
        })
        document.querySelector('.todoinput').value ='';
        this.input_value = '';
        this.getToDoData();
      },
      removeTodoData(key){
        //db에서 삭제
        firebase.database().ref(key).remove();
        this.getToDoData();
      },
      completeTodo(key){
        // console.log(key);
      }
    } 
  })
  

  
})(window, window.Vue);