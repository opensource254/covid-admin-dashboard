<template>
  <v-row class="auth-container" justify="center" align="center">
    <v-col md="6">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ error.message }}
      </h1>
      <v-btn
        depressed
        color="primary"
        large
        :to="$auth.loggedIn ? '/dashboard' : '/'"
      >
        Home page
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout({ store }) {
    return store.state.auth.loggedIn ? 'default' : 'auth'
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 70px;
}
</style>
