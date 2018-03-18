<template>
  <v-footer app>
    <v-spacer />
    &copy; {{ year }} - Denny Biasiolli
    <v-spacer />
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: Object.assign({
    year: () => new Date().getFullYear()
  })
}
</script>
