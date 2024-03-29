// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  data: function(){
    return {
      authorized: false,
      user: {},
      endpoint: 'http://localhost:8085/vue'
    }
  }
})

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
