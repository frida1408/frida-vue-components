<template>
  <div id="app">
    <hr />
    <input v-model="text" />
    <hr />
    <char-left :text="text" :maxChars="25"></char-left>
  </div>
</template>

<script>
import CharLeft from './components/charleft.vue'

export default {
  data() {
    return {
      text: ''
    }
  },
  components: {
    CharLeft
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
