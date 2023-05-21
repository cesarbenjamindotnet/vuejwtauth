export default function (auth) {
  return {
    setLogged (state, logged) {
      state.logged = !!logged
    },

    setUser (state, user) {
      console.log('setUser', user)
      state.user = user || {}
    },

    setToken (state, token) {
      console.log('setToken', token)
      state.token = token
    },

    setRefreshToken (state, refresh_token) {
      state.refresh_token = refresh_token
    },

    setRememberToken (state, rememberToken) {
      state.rememberToken = !!rememberToken
    },

    logout (state) {
      state.logged = false
      state.user = {}
      state.token = null
      state.rememberToken = false
    }
  }
}
