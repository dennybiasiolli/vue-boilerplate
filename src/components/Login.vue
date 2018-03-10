<template>
  <div class="Login">
    <h1>Login</h1>
    <p>
      <label>Username {{ username }}</label>
      <br>
      <input
        v-model="username"
        type="text"
        placeholder="Username">
    </p>
    <p>
      <label>Password</label>
      <br>
      <input
        v-model="password"
        type="password"
        placeholder="Password">
    </p>
    <p>
      <label>Remember me</label>
      <br>
      <input
        v-model="remember"
        type="checkbox">
    </p>
    <p>
      <button @click="login">Login</button>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('auth')

export default {
  data() {
    return {
      username: '',
      password: '',
      remember: true
    }
  },
  computed: Object.assign({}, mapGetters(['isLogged'])),

  methods: Object.assign(
    {
      login() {
        this.loginAsync({
          username: this.username,
          password: this.password,
          remember: this.remember
        }).then(
          () =>
            this.isLogged &&
            this.$router.push(this.$route.query.redirect || '/dashboard')
        )
      }
    },
    mapActions(['loginAsync'])
  )
}
</script>

<style scoped>
.Login {
  align-content: center;
  text-align: center;
}
</style>
