<template>
  <div>
    <ol>
      <todo-item
        v-for="item in groceryList"
        :todo="item"
        :key="item.id"/>
    </ol>
  </div>
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
