import { login } from '@/api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    token: Cookies.get('token'),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      let data = {
        username: username,
        password: userInfo.password
      }
      return login.call(this, data, (resp) => {
        if (resp.data.code === 200) {
          let userResult = {
            username: resp.data.result.username,
            token: resp.data.result.token
          }
          Cookies.set('Token', userResult.token)
          commit('SET_TOKEN', userResult.token)
          commit('SET_NAME', userResult.username)
        } else {
          this.$message.error('login error')
          this.$router.push('/login')
        }
      })
    }
  }
}

export default user
