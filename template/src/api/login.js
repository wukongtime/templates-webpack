import ajax from './request.js'
// var md5 = require('md5')

/**
 * 登录操作
 * @param data
 * @param fn
 */
export function login (data, fn) {
  ajax.call(this, 'post', '/login', data, fn, false)
}
