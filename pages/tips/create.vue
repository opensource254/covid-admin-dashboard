<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn to="/tips" large icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <v-col md="8">
      <v-form @submit.prevent="createAlert">
        <v-text-field
          v-model="title"
          rounded
          outlined
          label="Title"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-textarea
          v-model="detail"
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
          >Create TIP</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      title: null,
      detail: null
    }
  },
  methods: {
    async createAlert() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.post('/api/v1/tip', {
          title: this.title,
          detail: this.detail
        })
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
        this.$router.push('/tips')
        return true
      } catch (error) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', error)
      }
    }
  }
}
</script>
