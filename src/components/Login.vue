<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      align-center
      justify-center>
      <v-flex>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                :value="username"
                prepend-icon="person"
                name="login"
                label="Username"
                type="text" />
              <v-text-field
                :value="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password" />
              <v-checkbox
                v-model="remember"
                label="Remember me" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
