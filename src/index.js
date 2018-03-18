import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill' // IE11 & Safari 9 support
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#main-app',
  router,
  store,
  render: h => h(App)
})
