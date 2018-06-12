// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 防止ie 报这个错 vuex requires a Promise polyfill in this browser
import 'babel-polyfill'

// vuex store
// import store from './store/'

// element-ui
{{#if_eq desktopComponent "elementui"}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
{{/if_eq}}

{{#if_eq desktopComponent "iview"}}
import iView from 'iview'
import 'iview/dist/styles/iview.css'
{{/if_eq}}


// 自定义全局css
import './assets/styles/main.css'

// vuex
import Vuex from 'vuex'

// 全局使用bootstrap的css
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

{{#if_eq desktopComponent "elementui"}}
Vue.use(ElementUI, { size: 'small' })
{{/if_eq}}
{{#if_eq desktopComponent "iview"}}
Vue.use(iView)
{{/if_eq}}
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
