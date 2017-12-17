import Vue from 'vue'

import comp1 from '@/comp1'
import comp2 from '@/comp2'
import comp3 from '@/comp3'
import comp4 from '@/comp4'
import comp5 from '@/comp5'
import comp6 from '@/comp6'
import comp7 from '@/comp7'

export const mainApp = new Vue({
  el: '#main-app',
  components: {
    comp1: comp1,
    comp2: comp2,
    comp3: comp3,
    comp4: comp4,
    comp5: comp5,
    comp6: comp6,
    comp7: comp7
  }
})
