<template>
  <div id="app">
    <comp1 />
    <comp2 />
    <comp3 />
    <comp4 />
    <comp5 />
    <comp6 />
    <comp7 />
  </div>
</template>

<script>
import comp1 from '@/components/comp1'
import comp2 from '@/components/comp2'
import comp3 from '@/components/comp3'
import comp4 from '@/components/comp4'
import comp5 from '@/components/comp5'
import comp6 from '@/components/comp6'
import comp7 from '@/components/comp7'

export default {
  name: 'App',
  components: {
    comp1: comp1,
    comp2: comp2,
    comp3: comp3,
    comp4: comp4,
    comp5: comp5,
    comp6: comp6,
    comp7: comp7
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
