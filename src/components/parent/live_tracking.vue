<template>
  <v-app>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="light-blue lighten-1" dark v-on="on">
            Live Tracking
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="purple lighten-1">
            <v-btn icon dark @click="dialog = !dialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = !dialog">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <!--Map card starts -->
          <v-container>
            <v-row justify="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.216034981608!2d78.01191667122923!3d30.30675583388441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a28a2ec3c65%3A0x6a757a4f2a52a761!2sPatel%20Nagar%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1581595344881!5m2!1sen!2sin"
                width="800"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
              ></iframe>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LiveTracking",
  data: () => ({
    dialog: false
  })
});
</script>
