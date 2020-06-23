<template>
  <div>
    <v-row justify="center">
      <v-col sm="2">
        <v-card flat outlined>
          <v-list-item three-line>
            <v-list-item-icon>
              <v-icon>mdi-doctor</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Doctors</v-list-item-title>
              <v-list-item-subtitle>0</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col sm="2">
        <v-card flat outlined>
          <v-list-item three-line>
            <v-list-item-icon>
              <v-icon>mdi-doctor</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
              <v-list-item-subtitle>0</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>
