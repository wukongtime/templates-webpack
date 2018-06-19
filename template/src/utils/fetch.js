/**
 * http配置
 */
// import Vue from 'vue'
import axios from 'axios'
import router from '../router'
import store from '@/store'
// import qs from 'qs'

axios.defaults.baseURL = process.env.BASE_API
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    // if (
    //   config.method === 'post' ||
    //   config.method === 'put' ||
    //   config.method === 'delete'
    // ) { // 序列化
    //   config.data = qs.stringify(config.data)
    // }
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    config.headers.Authorization = store.state.users.token
    // config.headers.Accept = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  })
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/401',
            query: { redirect: router.currentRoute.path }
          })
          break
        case 404:
          router.replace({
            path: '/404',
            query: { redirect: router.currentRoute.path }
          })
          break
        default:
          router.replace({ path: '/error' })
      }
    }
    return Promise.reject(error)
  })

export default axios
