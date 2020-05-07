<template>
  <v-app>
    <v-navigation-drawer clipped app>
      <v-list nav shaped>
        <v-list-item to="/dashboard">
          <v-list-item-content
            ><v-list-item-title
              >Dashboard</v-list-item-title
            ></v-list-item-content
          >
        </v-list-item>
        <v-list-item to="/doctors">
          <v-list-item-content
            ><v-list-item-title>Doctors</v-list-item-title></v-list-item-content
          >
        </v-list-item>
        <v-list-item to="/users">
          <v-list-item-content
            ><v-list-item-title>Users</v-list-item-title></v-list-item-content
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left app> </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>
