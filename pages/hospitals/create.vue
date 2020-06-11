<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn to="/hospitals" large icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-col>
    <v-col md="8">
      <v-form @submit.prevent="createHospital">
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
          >Create hospital</v-btn
        >
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      hospital: {
        title: null,
        detail: null,
        lat: null,
        lon: null,
        description: null,
        open: true
      }
    }
  },
  methods: {
    async createHospital() {
      this.$store.commit('loading', true)
      try {
        await this.$axios.post('/api/v1/hospital', this.hospital)
        this.$store.commit('loading', false)
        this.$store.commit('hideError')
        this.$router.push('/hospitals')
        return true
      } catch (error) {
        this.$store.commit('loading', false)
        this.$store.commit('showError', error)
      }
    }
  }
}
</script>
