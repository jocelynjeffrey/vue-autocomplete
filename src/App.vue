<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- needs v-bind to tell Vue this is an expression rather than a string -->
    <Autocomplete msg="Type to Get Started" v-bind:allOptions="list" />
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete.vue'

export default {
  name: 'app',
  components: {
    Autocomplete
  },
  data() {
    return {
      list: ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
    }
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

h3 {
  margin: 40px 0 0;
}

button, input {
  font-size: 16px;
  display: block;
  height: 50px;
  width: 200px;
}

button {
  margin: auto;
  background:rgb(187, 241, 187);
}

input {
  margin: 1rem auto;
}

option {
  padding: 0.8rem 1rem;
}
</style>
