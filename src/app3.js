import Vue from 'vue'

export const comp3 = Vue.component('comp3', {
  template: `
<div>
  <span v-if="seen">Now you see me</span>
</div>`,
  data: function () {
    return {
      seen: true
    }
  }
})
