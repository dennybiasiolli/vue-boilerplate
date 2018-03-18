<template>
  <div>
    <p>{{ message }}</p>
    <v-text-field
      v-model="message"
      label="Label Text"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>
