import Vue from 'vue'
import Vuex from 'vuex'
import { moduleA } from './modules/moduleA'

Vue.use(Vuex)

export const modules = {
  a: moduleA
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})
