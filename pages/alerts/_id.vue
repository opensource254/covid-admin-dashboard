<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn color="accent" large icon to="/alerts">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-dialog v-model="deleteConfirmation" max-width="300px" persistent>
        <template v-slot:activator="{ on }">
          <v-btn large icon color="error" v-on="on">
            <v-icon>mdi-delete-outline</v-icon>
          </v-btn>
        </template>
        <v-card class="text-center" flat outlined shaped>
          <v-card-text>
            <h3>Please confirm you want to delete</h3>
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-row align-content="center">
                <v-col cols="6">
                  <v-btn
                    block
                    depressed
                    color="primary"
                    large
                    @click="deleteConfirmation = false"
                    >Cancel</v-btn
                  >
                </v-col>
                <v-col cols="6">
                  <v-btn block color="error" outlined @click="deleteAlert"
                    >Yes Delete</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions></v-card
        >
      </v-dialog>
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
    },
    async deleteAlert() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.delete(`/api/v1/alert/${this.$route.params.id}`)
        this.$router.push('/alerts')
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
