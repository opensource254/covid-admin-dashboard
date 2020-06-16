<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="8" md="6">
        <v-card outlined shaped>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="$auth.user.firstname"
                label="First Name"
                outlined
                rounded
              ></v-text-field>
              <v-text-field
                v-model="$auth.user.lastname"
                label="Last Name"
                outlined
                rounded
              ></v-text-field>
              <v-text-field
                v-model="$auth.user.email"
                disabled
                type="email"
                label="Email"
                outlined
                rounded
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                label="Password"
                rounded
              ></v-text-field>
              <v-text-field
                outlined
                type="password"
                label="Confirm Password"
                rounded
              ></v-text-field>
              <v-btn block rounded depressed color="primary" large type="button"
                >Update Profile</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
