const state = {
  user: JSON.parse(localStorage.getItem('authUser'))
}

const mutations = {
  login(state, obj) {
    const userObj = { username: obj.username }
    obj.remember && localStorage.setItem('authUser', JSON.stringify(userObj))
    state.user = userObj
  },

  logout(state) {
    localStorage.removeItem('authUser')
    state.user = null
  }
}

const actions = {
  loginAsync({ commit, state, getters }, obj) {
    return new Promise(resolve =>
      setTimeout(() => {
        commit('login', { username: obj.username, remember: obj.remember })
        resolve(true)
      }, 500)
    )
  },

  logoutAsync({ commit, state, getters }) {
    return new Promise(resolve =>
      setTimeout(() => {
        commit('logout')
        resolve(true)
      }, 500)
    )
  }
}

const getters = {
  isLogged: state => !!state.user
}

export const moduleAuth = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
