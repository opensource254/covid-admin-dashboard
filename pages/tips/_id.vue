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
        ></v-text-field>
        <v-textarea
          v-model="tip.detail"
          rounded
          outlined
          label="Detail"
        ></v-textarea>
        <v-btn type="submit" large rounded depressed color="primary"
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
      try {
        await this.$axios.put(`/api/v1/tip/${this.$route.params.id}`, this.tip)
      } catch (error) {
        //
      }
    }
  }
}
</script>
