import Vue from 'vue'

export const comp2 = Vue.component('comp2', {
  template: `
<div>
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound title!
  </span>
</div>`,
  data: function () {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
})
