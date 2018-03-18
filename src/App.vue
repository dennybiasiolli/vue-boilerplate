<template>
  <v-app>
    <Nav />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Nav from './components/Nav'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar,
    Nav,
    Footer
  }
}
</script>

<style></style>
