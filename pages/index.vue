<template>
  <div class="first-background">
    <v-container fluid>
      <v-row justify="center" align="center" class="auth-container">
        <v-col cols="12" md="5" sm="10" xl="4">
          <v-alert
            v-if="$store.state.serverError.status"
            type="error"
            prominent
          >
            {{ $store.state.serverError.message }}
          </v-alert>
          <v-card :loading="$store.state.loading">
            <div class="text-center">
              <nuxt-link class="mt-n16" to="/">
                <v-avatar height="100" width="100">
                  <img contain src="/icon.png" />
                </v-avatar>
              </nuxt-link>
            </div>

            <v-card-text>
              <ValidationObserver v-slot="{ valid }">
                <v-form @submit.prevent="login">
                  <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|email"
                    name="E-mail"
                  >
                    <v-text-field
                      v-model="credentials.email"
                      :loading="$store.state.loading"
                      rounded
                      large
                      autocomplete="off"
                      outlined
                      name="email"
                      :error-messages="errors"
                      label="E-Mail Address"
                      type="email"
                    ></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Password"
                  >
                    <v-text-field
                      v-model="credentials.password"
                      :loading="$store.state.loading"
                      :error-messages="errors"
                      rounded
                      large
                      autocomplete="off"
                      outlined
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </ValidationProvider>
                  <v-btn
                    :loading="$store.state.loading"
                    type="submit"
                    depressed
                    rounded
                    x-large
                    :disabled="!valid"
                    color="primary"
                    >Sign In</v-btn
                  >
                </v-form>
              </ValidationObserver>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  auth: 'guest',
  data() {
    return {
      credentials: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    async login() {
      this.$store.commit('loading', true)
      try {
        await this.$auth.loginWith('local', { data: this.credentials })
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
        return
      } catch (err) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', err)
        return err
      }
    }
  },
  head() {
    return {
      title: 'Sign In'
    }
  },
  layout() {
    return 'auth'
  }
}
</script>
