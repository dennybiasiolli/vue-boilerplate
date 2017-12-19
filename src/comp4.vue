<template>
  <div>
    <ol>
      <li v-for="(todo, key) in todos" :key="key">{{ todo.text }}</li>
    </ol>
  </div>
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
