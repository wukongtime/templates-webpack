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
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      let data = {
        username: username,
        password: userInfo.password
      }
      return login.login.call(this, data, (data) => {
        // debugger
        if (data.code === 0) {
          let userResult = {
            userinfo: {
              "username": data.result.username,
              "token": data.result.token
            }
          }
          this.$store.dispatch('update_userinfo', {
            userinfo: userResult.userinfo
          }).then(() => {
            this.$router.push('/dashboard/dashboard')
          })
        } else {
          this.$message.error(data.message)
          this.$router.push('/login')
        }
      })
      // return new Promise((resolve, reject) => {
      //   login(username, userInfo.password).then(response => {
      //     const data = response.data
      //     Cookies.set('token', data.token)
      //     commit('SET_TOKEN', data.token)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    }
  }
}

export default user
