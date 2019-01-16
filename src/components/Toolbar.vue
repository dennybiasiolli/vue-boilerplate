<template>
  <v-toolbar
    fixed
    app
  >
    <v-toolbar-side-icon @click.stop="handleToggle" />
    <v-toolbar-title>
      Sample App!
    </v-toolbar-title>
    <v-spacer />
    <a
      v-if="isLogged"
      @click="handleLogout"
    >
      Logout
      <v-icon
        title="Logout"
      >
        exit_to_app
      </v-icon>
    </a>
  </v-toolbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('auth')
const { mapState, mapMutations } = createNamespacedHelpers('a')

export default {
  name: 'Toolbar',
  computed: Object.assign({}, mapState(['drawer']), mapGetters(['isLogged'])),
  methods: Object.assign(
    {
      handleToggle() {
        this.toggleDrawer()
      },
      handleLogout() {
        return this.logoutAsync().then(() => {
          this.$router.push('/login')
        })
      }
    },
    mapMutations(['toggleDrawer']),
    mapActions(['logoutAsync'])
  )
}
</script>
