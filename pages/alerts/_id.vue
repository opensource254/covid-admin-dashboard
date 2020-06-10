<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn large icon to="/alerts">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <v-col md="8">
      <v-form @submit.prevent="updateAlert">
        <v-text-field
          v-model="alert.title"
          rounded
          outlined
          label="Title"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-textarea
          v-model="alert.detail"
          rounded
          outlined
          label="Detail"
          :loading="$store.state.loading"
        ></v-textarea>
        <v-btn
          :loading="$store.state.loading"
          type="submit"
          large
          rounded
          depressed
          color="primary"
          >Update Alert</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async fetch() {
    try {
      const response = await this.$axios.get(
        `/api/v1/alert/${this.$route.params.id}`
      )
      this.alert = response.data
    } catch (error) {}
  },
  data() {
    return {
      alert: {}
    }
  },
  methods: {
    async updateAlert() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.put(
          `/api/v1/alert/${this.$route.params.id}`,
          this.alert
        )
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
      } catch (error) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', error)
      }
    }
  }
}
</script>
