<template>
  <div id="app">
    <Question/>
  </div>
</template>

<script>
import Question from './components/QestionComponent.vue'

export default {
  name: 'app',
  components: {
    Question
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
