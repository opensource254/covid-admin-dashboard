<template>
  <v-app>
    <v-navigation-drawer
      mobile-break-point="sm"
      :permanent="$vuetify.breakpoint.smAndUp"
      :temporary="!$vuetify.breakpoint.smAndUp"
      app
      clipped
    >
      <v-list nav shaped>
        <v-list-item to="/dashboard">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title
              >Dashboard</v-list-item-title
            ></v-list-item-content
          >
        </v-list-item>
        <v-list-item to="/doctors">
          <v-list-item-icon>
            <v-icon>mdi-doctor</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title>Doctors</v-list-item-title></v-list-item-content
          >
        </v-list-item>
        <v-list-item to="/users">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title>Users</v-list-item-title></v-list-item-content
          >
        </v-list-item>
        <v-list-item to="/alerts">
          <v-list-item-icon>
            <v-icon>mdi-hazard-lights</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title>Alerts</v-list-item-title></v-list-item-content
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left app>
      <v-toolbar-title>Covid19Kenya</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>
