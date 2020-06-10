<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn large icon to="/tips">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <v-col md="8">
      <v-form @submit.prevent="updateTip">
        <v-text-field
          v-model="tip.title"
          rounded
          outlined
          label="Title"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-textarea
          v-model="tip.detail"
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
          >Update tip</v-btn
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
        `/api/v1/tip/${this.$route.params.id}`
      )
      this.tip = response.data
    } catch (error) {}
  },
  data() {
    return {
      tip: {}
    }
  },
  methods: {
    async updateTip() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.put(`/api/v1/tip/${this.$route.params.id}`, this.tip)
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
