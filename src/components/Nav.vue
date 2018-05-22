<template>
  <v-navigation-drawer
    :value="drawer"
    fixed
    app
    @input="toggleDrawer">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider />
    <v-list>
      <v-list-tile @click="$router.push('/')">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="(c, i) in components"
        :key="i"
        @click="$router.push(c.url)">
        <v-list-tile-action>
          <v-icon>{{ c.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ c.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('a')

export default {
  name: 'Nav',
  data: () => ({
    components: [
      { title: 'Component 1', url: '/comp1', icon: 'polymer' },
      { title: 'Component 2', url: '/comp2', icon: 'polymer' },
      { title: 'Component 3', url: '/comp3', icon: 'polymer' },
      { title: 'Component 4', url: '/comp4', icon: 'polymer' },
      { title: 'Component 5', url: '/comp5', icon: 'polymer' },
      { title: 'Component 6', url: '/comp6', icon: 'polymer' },
      { title: 'Component 7', url: '/comp7', icon: 'polymer' },
      { title: 'Component 8', url: '/comp8', icon: 'polymer' },
      { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' }
    ]
  }),
  computed: Object.assign({}, mapState(['drawer'])),
  methods: Object.assign({}, mapMutations(['toggleDrawer']))
}
</script>
