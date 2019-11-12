<template>
  <div id="app">
<<<<<<< HEAD
    <div v-if="started">
    <Question/>
    </div>
    <div v-else>
      <b-button @click="create">Créer la partie</b-button>
      <b-spinner variant="light" label="Spinning"></b-spinner>
    </div>
=======
    <b-nav tabs align="center">
      <b-nav-item to='/test'>Test</b-nav-item>
    </b-nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
>>>>>>> Add routes with Vue Router
  </div>
</template>

<script>
<<<<<<< HEAD
import Question from './components/QestionComponent.vue'

export default {
  name: 'app',
  components: {
    Question,
  },
  data : function(){
    return{
      started : false
    }
  },
  methods: {
    create:function(){
      this.$socket.emit('newGame',2,3);
      this.started = true;
    }
  }
}
=======
>>>>>>> Add routes with Vue Router

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #888888;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
