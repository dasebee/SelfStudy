var app = new Vue({
  el: '#app',
  data: {
    message : 'Hello Vue!',
    rawHtml : '<h1>v-html을 사용</h1>',
    dynamicId:'thisisid',
    number: 329,
    ok : true
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message : '이 페이지는 ' + new Date() + '에 로드 되었습니다'
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})


var app4 = new Vue({
  el: '#app-4',
  data :{
    todos : [
      {text : 'JavaScript 공부하기'},
      {text : 'Vue 공부하기'},
      {text : '일찍자기'}
    ]
  }
})

// app4.todos.push({text: 'New item 추가'})

var app5 = new Vue({
  el: '#app-5',
  data : {
    message : 'Hi vue!'
  },
  methods : {
    reverseMessage : function(){
      this.message = this.message.split('').reverse().join('');
    }
  }
});


var app6 = new Vue({
  el: '#app-6',
  data:{
    message : '잠온다'
  }
})

// --------------------------------
var data = { a:1}
var vm = new Vue({
  data: data
})

vm.a === data.a // true

vm.a = 2
console.log(data.a); //2 , 프록시 속성은 반응형




