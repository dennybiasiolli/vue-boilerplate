<template>
  <div>
    <p>{{ message }}</p>
    <v-btn
      ref="btn"
      @click="reverseMessage">Reverse Message</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
