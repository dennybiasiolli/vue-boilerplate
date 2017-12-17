import Vue from 'vue'

export const comp5 = Vue.component('comp5', {
  template: `
<div>
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>`,
  data: function () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
