<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-btn large rounded depressed block color="accent" to="/tips/create"
        >Create tip</v-btn
      >
    </v-col>
    <v-col cols="10" md="6">
      <v-skeleton-loader
        v-if="$fetchState.pending"
        class="mx-auto"
        type="list-item-three-line"
      ></v-skeleton-loader>

      <v-alert v-else-if="$fetchState.error" outlined type="error">
        We are not able to get Tips 😢
      </v-alert>

      <v-card
        v-for="(tip, index) in tips"
        :key="index"
        flat
        outlined
        class="my-3"
        :to="`/tips/${tip.id}`"
      >
        <v-list-item three-line nuxt>
          <v-list-item-content>
            <v-list-item-title>{{ tip.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ tip.detail }}</v-list-item-subtitle>
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
      const response = await this.$axios.get('/api/v1/tips')
      this.tips = response.data.data
    } catch (err) {
      //
    }
  },
  data() {
    return {
      tips: []
    }
  },
  head() {
    return {
      title: 'Tips'
    }
  }
}
</script>
