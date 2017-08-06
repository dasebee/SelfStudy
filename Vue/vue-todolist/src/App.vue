<template lang="pug">
  #app
    .alert(v-show="show") 
      p {{ msg }}
    h1 To Do List
    todo-input
    todo-list
    todo-count
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoCount from './components/TodoCount.vue'

export default {
  name: 'app',
  data () {
    return {
      show: true,
      msg: 'hello'
    }
  },
  components: {
    TodoInput,
    TodoList,
    TodoCount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
