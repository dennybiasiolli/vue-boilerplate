<template>
  <v-list>
    <v-list-tile
      v-for="(todo, key) in todos"
      :key="key"
      @click="()=>{}"
    >
      <v-list-tile-action>
        {{ key + 1 }}
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ todo.text }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ todo.text }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}
</script>
