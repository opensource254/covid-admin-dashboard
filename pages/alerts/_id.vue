<template>
  <v-row>
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
        ></v-text-field>
        <v-textarea
          v-model="alert.detail"
          rounded
          outlined
          label="Detail"
        ></v-textarea>
        <v-btn type="submit" large rounded depressed color="primary"
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
      try {
        await this.$axios.put(
          `/api/v1/alert/${this.$route.params.id}`,
          this.alert
        )
      } catch (error) {
        console.warn(error)
      }
    }
  }
}
</script>
