<template>
  <div class="first-background">
    <v-container fluid>
      <v-row justify="center" align="center" class="auth-container">
        <v-col md="5" sm="8" xl="4">
          <v-card>
            <div class="text-center">
              <nuxt-link class="mt-n12" to="/">
                <v-avatar height="100" width="100">
                  <img contain src="/icon.png" />
                </v-avatar>
              </nuxt-link>
            </div>

            <v-card-text>
              <ValidationObserver v-slot="{ valid }">
                <v-form>
                  <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|email"
                    name="E-mail"
                  >
                    <v-text-field
                      v-model="credentials.email"
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
                    to="/dashboard"
                    nuxt
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
