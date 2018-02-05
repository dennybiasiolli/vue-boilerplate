import Vue from 'vue'
import Vuex from 'vuex'
import { moduleA } from './modules/moduleA'
import { moduleAuth } from './modules/moduleAuth'

Vue.use(Vuex)

export const modules = {
  a: moduleA,
  auth: moduleAuth
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})
