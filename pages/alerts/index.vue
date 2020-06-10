<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn to="/alerts/create">Create Alert</v-btn>
    </v-col>
    <v-col cols="10" md="6">
      <v-skeleton-loader
        v-if="$fetchState.pending"
        class="mx-auto"
        type="list-item-three-line"
      ></v-skeleton-loader>

      <v-card
        v-for="(alert, index) in alerts"
        :key="index"
        flat
        outlined
        class="my-3"
        :to="`/alerts/${alert.id}`"
      >
        <v-list-item three-line nuxt>
          <v-list-item-content>
            <v-list-item-title>{{ alert.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ alert.detail }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async fetch() {
    try {
      const response = await this.$axios.get('/api/v1/alerts')
      this.alerts = response.data.data
    } catch (err) {
      //
    }
  },
  data() {
    return {
      alerts: []
    }
  }
}
</script>
