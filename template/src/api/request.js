import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from '@/utils/fetch.js'
// import store from '../store'
// 导入封装的回调函数及配置信息
// import settings from '../config/settings.js'
Vue.use(VueAxios, axios)

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，等需要
 */
var ajax = function (type, url, data, fn, tokenFlag) {
  // Vue.axios.defaults.headers.common['token'] = store.getters.getUserInfo.token
  var datas = null
  if (type === 'get') {
    // 判断data是否为空，不做判断会导致空对象直接赋值属性的错误
    if (data !== '' && data !== null) {
      data.ts = Date.now()
    }
    datas = {
      params: data
    }
  } else {
    datas = data
  }

  Vue.axios[type](url, datas).then((res) => {
    if (res.status === 200) {
      fn(res)
    } else {
      // 调用全局配置错误回调
      console.log(this)
      // settings.cbs.statusError.call(this, res.data)
    }
    // this.$store.dispatch('hide_loading');
  }).catch((err) => {
    console.log(err)
    // this.$store.dispatch('hide_loading');
    // settings.cbs.requestError.call(this, err)
  })
}
export default ajax
