<template>
  <div id="app">
    <b-nav tabs align="center">
      <b-nav-item to='/test'>Test</b-nav-item>
    </b-nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>

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
