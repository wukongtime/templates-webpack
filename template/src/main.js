// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 防止ie 报这个错 vuex requires a Promise polyfill in this browser
import 'babel-polyfill'

// vuex store
import store from './store/'

// vuex
import Vuex from 'vuex'

// 全局使用bootstrap的css
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
