<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn large icon to="/hospitals">
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
                  <v-btn block color="error" outlined @click="deleteHospital"
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
      <v-form @submit.prevent="updateHospital">
        <v-text-field
          v-model="hospital.title"
          rounded
          outlined
          label="Title"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-text-field
          v-model="hospital.lat"
          rounded
          outlined
          type="number"
          label="Latitude"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-text-field
          v-model="hospital.lon"
          rounded
          outlined
          type="number"
          label="Longitude"
          :loading="$store.state.loading"
        ></v-text-field>
        <v-textarea
          v-model="hospital.description"
          outlined
          rounded
          :loading="$store.state.loading"
          label="Description"
        ></v-textarea>

        <v-btn
          :loading="$store.state.loading"
          type="submit"
          large
          rounded
          depressed
          color="primary"
          >Update hospital</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch() {
    try {
      const response = await this.$axios.get(
        `/api/v1/hospital/${this.$route.params.id}`
      )
      this.hospital = response.data
    } catch (error) {}
  },
  data() {
    return {
      deleteConfirmation: false,
      hospital: {}
    }
  },
  methods: {
    async updateHospital() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.put(
          `/api/v1/hospital/${this.$route.params.id}`,
          this.hospital
        )
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
      } catch (error) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', error)
      }
    },
    async deleteHospital() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.delete(`/api/v1/hospital/${this.$route.params.id}`)
        this.$router.push('/hospitals')
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
      } catch (error) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', error)
      }
    }
  },
  head() {
    return {
      title: this.hospital.title
    }
  }
}
</script>
