import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../signon/index.vue'
import Stat from '../stat/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signon',
      name: 'Login',
      component: Login
    },
    {
      path: '/stat',
      name: 'stat',
      component: Stat
    }
  ]
})
