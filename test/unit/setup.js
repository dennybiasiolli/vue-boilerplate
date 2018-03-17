import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

const localStorageMock = {
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn().mockReturnValue(null),
  removeItem: jest.fn().mockReturnValue(null)
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})
