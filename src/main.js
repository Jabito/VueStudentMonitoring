// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './components/Login'

Vue.config.productionTip = false
Vue.prototype.$endpoint = 'http://localhost:8085/vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Login},
  template: '<Login/>'
})
