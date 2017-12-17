<template>
  <div>
    <ol>
      <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
      </todo-item>
    </ol>
  </div>
</template>

<script>
import todoItem from '@/todoItem'

export default {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  components: {
    'todo-item': todoItem
  }
}
</script>
