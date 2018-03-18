const state = {
  count: 0,
  drawer: null
}

const mutations = {
  increment(state, n = 1) {
    state.count += n
  },

  toggleDrawer(state, val) {
    state.drawer = val !== undefined ? val : !state.drawer
  }
}

const actions = {
  incrementAsync({ commit, state, getters }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  // getter based only on state
  isCountEven: state => (state.count % 2) === 0,
  // computed getter, based on another getter
  isCountOdd: (state, getters) => !getters.isCountEven
}

export const moduleA = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
