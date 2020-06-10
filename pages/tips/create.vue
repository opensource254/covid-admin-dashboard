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
        ></v-text-field>
        <v-textarea
          v-model="detail"
          rounded
          outlined
          label="Detail"
        ></v-textarea>
        <v-btn type="submit" large rounded depressed color="primary"
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
      try {
        await this.$axios.post('/api/v1/tip', {
          title: this.title,
          detail: this.detail
        })
        return true
      } catch (error) {
        //
      }
    }
  }
}
</script>
