<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mobile-breakpoint="sm"
      :permanent="$vuetify.breakpoint.smAndUp"
      :temporary="!$vuetify.breakpoint.smAndUp"
      app
      clipped
    >
      <v-list-item to="/profile">
        <v-list-item-avatar>
          <v-avatar color="primary"> </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >{{ $auth.user.firstname }} {{ $auth.user.lastname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $auth.user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
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
        <v-list-item to="/geofence">
          <v-list-item-icon>
            <v-icon>mdi-map-marker-radius</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title
              >Geofence</v-list-item-title
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
        <v-list-item to="/hospitals">
          <v-list-item-icon>
            <v-icon>mdi-hospital-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title
              >Health Centers</v-list-item-title
            ></v-list-item-content
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
      <v-app-bar-nav-icon
        :hidden="$vuetify.breakpoint.smAndUp"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title :hidden="!$vuetify.breakpoint.smAndUp"
        >Covid19Kenya</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-alert v-if="$store.state.serverError.status" type="error" prominent>
          {{ $store.state.serverError.message }}
        </v-alert>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
