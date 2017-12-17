import Vue from 'vue'

export const comp1 = Vue.component('comp1', {
  template: `
<div>
  {{ message }}
</div>`,
  data: function () {
    return {
      message: 'Hello Vue!'
    }
  }
})
