<template>
  <div id="app">
    <!-- needs v-bind to tell Vue this is an expression rather than a string -->
    <Autocomplete msg="Type to Get Started" v-bind:allOptions="list" />
  </div>
</template>

<script>
import Autocomplete from './components/Autocomplete.vue';

export default {
  name: 'app',
  components: {
    Autocomplete
  },
  data() {
    return {
      list: ['Falcon', 'Fox', 'Ferret', 'Finch', 'Fish', 'Fishing Cat', 'Flamingo']
    }
  },
  created() {
    this.list = this.list.map(item => item.toLowerCase());
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #364759;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}

button, input {
  font-size: 16px;
  height: 50px;
}

button {
  margin: auto;
  background:rgb(187, 241, 187);
}

input {
  padding: 0 1rem;
  width: 90%;
}

li {
  list-style: none;
  padding: 0.8rem 1rem;
}
</style>
