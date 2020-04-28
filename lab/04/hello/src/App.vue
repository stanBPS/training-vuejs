<template>
  <div id="app">
    <chuck-norris v-bind:facts="facts"></chuck-norris>
  </div>
</template>

<script>
import ChuckNorris from './components/ChuckNorris.vue'
import facts from "./facts"

export default {
  name: 'App',
  components: {
    ChuckNorris
  },
  data: function(){
    return {
      facts,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
