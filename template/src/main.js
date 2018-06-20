// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import App from './App'
import router from './router'

// 防止ie 报这个错 vuex requires a Promise polyfill in this browser
import 'babel-polyfill'

// vuex store
// import store from './store/'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 自定义全局css
import '@/assets/styles/index.scss' // global css

// vuex
import Vuex from 'vuex'

// 全局使用bootstrap的css
import 'bootstrap/dist/css/bootstrap.css'

import '@/permission' // permission control

import '@/assets/icons' // icon

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
