<template>
  <v-row justify="center">
    <v-col cols="10" md="6">
      <v-skeleton-loader
        v-if="$fetchState.pending"
        class="mx-auto"
        type="list-item-three-line"
      ></v-skeleton-loader>

      <v-alert v-else-if="$fetchState.error" outlined type="error">
        We are not able to get Data 😢
      </v-alert>

      <v-card
        v-for="(geofence, index) in allGeofence"
        :key="index"
        flat
        outlined
        class="my-3"
        :to="`/geofence/${geofence.id}`"
      >
        <v-list-item three-line nuxt>
          <v-list-item-content>
            <v-list-item-title>{{ geofence.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ geofence.point }}</v-list-item-subtitle>
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
      this.allGeofence = await this.$axios.get('/api/v1/geofences').data
    } catch (e) {
      //
    }
  },
  data() {
    return {
      allGeofence: []
    }
  },
  head() {
    return {
      title: 'Geofence'
    }
  }
}
</script>
