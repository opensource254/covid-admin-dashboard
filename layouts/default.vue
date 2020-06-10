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
            <v-icon>mdi-home-outline</v-icon>
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
            <v-icon>mdi-account-outline</v-icon>
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

        <v-list-item to="/tips">
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title>Tips</v-list-item-title></v-list-item-content
          >
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block depressed color="error" @click="$auth.logout()"
            >Logout</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar clipped-left app>
      <v-toolbar-title>Covid19Kenya</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-alert v-if="$store.state.serverError.status" type="error" prominent>
          {{ $store.state.serverError.message }}
        </v-alert>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
