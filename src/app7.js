import Vue from 'vue'

// Define a new component called todo-item
const todoItem = Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

export const comp7 = Vue.component('comp7', {
  template: `
<div>
  <ol>
    <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
    </todo-item>
  </ol>
</div>`,
  data: function () {
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
})
