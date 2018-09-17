<template>
  <div>
      <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <!-- <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a> -->
            <!-- <a class="navbar-item" v-for="item in listMenu" :key="item">
                <router-link :to="`signon/${item}`">&nbsp; &nbsp; {{ item }} </router-link>
            </a> -->
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> 
          </div>
        </nav>
  </div>
</template>

<script>
    export default {
      name: 'Navbar',
      data () {
        return {
        }
      }
    }
    </script>