import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  count: 0
}

export const mutations = {
  increment(state, n = 1) {
    state.count += n
  }
}

export const getters = {
  // getter based only on state
  isCountEven: state => (state.count % 2) === 0,
  // computed getter, based on another getter
  isCountOdd: (state, getters) => !getters.isCountEven
}

export default new Vuex.Store({
  // store global state
  state,

  // store mutations
  mutations,

  // computed properties for store
  getters
})
