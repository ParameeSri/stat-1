<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import 'buefy/dist/buefy.css'
import Navbar from  './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  },
  data () {
    return {

    }
  },
  created () {
    let token = localStorage.getItem('stat-token') || null
    console.log(token)
    if (!token) {
      return this.$router.replace('/stat')
    }
    return this.$router.replace('/stat')
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
