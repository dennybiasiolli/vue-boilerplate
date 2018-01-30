import Vue from 'vue'
import VueRouter from 'vue-router'
import comp1 from '@/components/comp1'
import comp2 from '@/components/comp2'
import comp3 from '@/components/comp3'
import comp4 from '@/components/comp4'
import comp5 from '@/components/comp5'
import comp6 from '@/components/comp6'
import comp7 from '@/components/comp7'
import comp8 from '@/components/comp8'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/comp1', component: comp1 },
    { path: '/comp2', component: comp2 },
    { path: '/comp3', component: comp3 },
    { path: '/comp4', component: comp4 },
    { path: '/comp5', component: comp5 },
    { path: '/comp6', component: comp6 },
    { path: '/comp7', component: comp7 },
    { path: '/comp8', component: comp8 }
  ]
})