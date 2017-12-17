import Vue from 'vue'

import { comp1 } from '@/app'
import { comp2 } from '@/app2'
import { comp3 } from '@/app3'
import { comp4 } from '@/app4'
import { comp5 } from '@/app5'
import { comp6 } from '@/app6'
import { comp7 } from '@/app7'

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
