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
    if (!token) {
      return this.$router.replace('/signon')
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
.box {
  margin-top: 2cm;
  margin-left: 2cm;
  margin-right: 2cm;
  margin-bottom: 2cm;
}
.mainSingon {
  margin-top: 5cm;
}
</style>
