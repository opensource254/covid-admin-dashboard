<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-btn large rounded depressed block color="accent" to="/hospitals/create"
        >Create hospital</v-btn
      >
    </v-col>
    <v-col cols="10" md="6">
      <v-skeleton-loader
        v-if="$fetchState.pending"
        class="mx-auto"
        type="list-item-three-line"
      ></v-skeleton-loader>

      <v-alert v-else-if="$fetchState.error" outlined type="error">
        We are not able to get hospitals 😢
      </v-alert>

      <v-card
        v-for="(hospital, index) in hospitals"
        :key="index"
        flat
        outlined
        class="my-3"
        :to="`/hospitals/${hospital.id}`"
      >
        <v-list-item three-line nuxt>
          <v-list-item-content>
            <v-list-item-title>{{ hospital.title }}</v-list-item-title>
            <v-list-item-subtitle>{{
              hospital.description
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <v-chip color="success">Open</v-chip>
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-card>
      <v-pagination
        v-model="current_page"
        :length="hospitalCount"
      ></v-pagination>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async fetch() {
    try {
      const response = await this.$axios.get(
        `/api/v1/hospitals?count=15&page=${this.current_page}`
      )
      this.hospitals = response.data.data
      this.hospitalCount = parseInt(response.data.last_page)
    } catch (err) {
      //
    }
  },
  data() {
    return {
      hospitals: [],
      hospitalCount: 0,
      current_page: 1
    }
  },
  watch: {
    current_page(latest, prev) {
      this.$router.push(`/hospitals/?page=${latest}`)
    },
    '$route.query': '$fetch'
  },
  head() {
    return {
      title: 'Health Centers'
    }
  }
}
</script>
