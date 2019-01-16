<template>
  <v-list-tile @click="()=>{}">
    <v-list-tile-action>
      <v-icon color="indigo">
        keyboard_arrow_right
      </v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ todo.text }}</v-list-tile-title>
      <v-list-tile-sub-title>{{ todo.text }}</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
