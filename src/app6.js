import Vue from 'vue'

export const comp6 = Vue.component('comp6', {
  template: `
<div>
  <p>{{ message }}</p>
  <input v-model="message">
</div>`,
  data: function () {
    return {
      message: 'Hello Vue!'
    }
  }
})
