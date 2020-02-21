<template>
<!-- toolbar dialog -->
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Attendance</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Attendance</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>

<!-- content  -->
        <v-container class="text-center">
          <v-row>
            <divider></divider>
            <v-col cols="12" lg="2" class="mx-7">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="computedDateFormatted"
                    label="Date To"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    :prepend-icon="calender"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-layout row>
            <v-col cols="6" v-for="chips in days" :key="chips.name">
              <v-card width="400" height="130">
                <v-card-title class="grey">{{ chips.name }}</v-card-title>

                <v-chip class="ma-4 font-weight-bold" color="green" text-color="white">Present</v-chip>
                <v-chip class="ma-4 font-weight-bold" color="red" text-color="white">Absent</v-chip>
              </v-card>
            </v-col>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

// script starts 

<script>
import { mdiCalendar } from "@mdi/js";
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    calender: mdiCalendar,

    days: [
      { name: "Today" },
      { name: "Today" },
      { name: "Today" },
      { name: "Today" }
    ]
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.AmitSIr {
  text-align: center;
}
</style>
