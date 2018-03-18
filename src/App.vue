<template>
  <v-app>
    <Nav />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer />
      &copy; {{ year }} - Denny Biasiolli
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar,
    Nav
  },
  computed: Object.assign({
    year: () => new Date().getFullYear()
  })
}
</script>

<style></style>
