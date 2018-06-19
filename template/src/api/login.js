import ajax from './request.js'
// var md5 = require('md5')

const login = {
  /**
   * 登录操作
   * @param data
   * @param fn
   */
  login (data, fn) {
    ajax.call(this, 'post', '/login', data, fn, false)
  }
}

export default login
