<template>
  <div>
    <h1>Dashboard</h1>
    {{ message }}
    <p>
      <button @click="logout">Logout</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Authenticated!'
    }
  },

  methods: {
    logout() {
      this.$store
        .dispatch('auth/logoutAsync')
        .then(() => this.$router.push('/login'))
    }
  }
}
</script>
