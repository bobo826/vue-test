<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './page/index'
export default {
  name: 'App',
  components: {
    Index: Index
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
  background: #ddd;
}
</style>
