(function(global, Vue){
 'use strict' 
//  해야하는 것
//  깜빡임 해결. 
//  checkbox - checked 
//  is-complete class로 완료된 것 스타일 주기
//  입력한 내용 수정
//  all / active / complete 필터로 보기 

//  접근성
//  키보드 포커스
//  aria

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
      changeCompleteStatus(todo){
        //  complete가 ture일때와 false일 때 나눠서 실행. 
        todo.complete ? firebase.database().ref().child(todo.key).update({complete : false}) : firebase.database().ref().child(todo.key).update({complete : true})
        this.getToDoData();
      }
    } 
  })
  

  
})(window, window.Vue);