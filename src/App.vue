<template>
  <div id="app">
    <h1>Sample App!</h1>
    <p>Click on the component to show it</p>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/comp1">Component 1</router-link>
      |
      <router-link to="/comp2">Component 2</router-link>
      |
      <router-link to="/comp3">Component 3</router-link>
      |
      <router-link to="/comp4">Component 4</router-link>
      |
      <router-link to="/comp5">Component 5</router-link>
      |
      <router-link to="/comp6">Component 6</router-link>
      |
      <router-link to="/comp7">Component 7</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
