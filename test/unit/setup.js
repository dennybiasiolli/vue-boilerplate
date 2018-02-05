import Vue from 'vue'

Vue.config.productionTip = false

const localStorageMock = {
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn().mockReturnValue(null),
  removeItem: jest.fn().mockReturnValue(null)
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})
