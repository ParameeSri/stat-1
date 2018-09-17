// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { apiHost } from './config'
import Buefy from 'buefy'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Buefy)
Vue.use(VueResource)

Vue.http.options.root = apiHost

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
