<template>
  <v-list>
    <todo-item
      v-for="item in groceryList"
      :key="item.id"
      :todo="item"
    />
  </v-list>
</template>

<script>
import todoItem from '@/components/todoItem'

export default {
  components: {
    'todo-item': todoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>
