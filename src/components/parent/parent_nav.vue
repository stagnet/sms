// ? navbar for parents..
<template>
  <v-app id="parent_nav">
    <!-- navbar .. -->
    <v-navigation-drawer v-model="drawer1" app class="nav1">
      <v-list dense dark>
        <!-- list option -->
        <v-list-item link v-for="list in listOption" :key="list">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ list.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="purple darken-1" dark>
      <v-app-bar-nav-icon @click.stop="drawer1 = !drawer1" />
      <v-toolbar-title>Parent</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- menu bar -->
      <v-menu offset-y dense>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon> mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item" @click="item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- menu bar ENDS -->
    </v-app-bar>
    <!-- navbar ENDS  -->
    <!-- RENDERING parentDash content -->
    <v-content>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <ParentDash />
            <timeTable />
            <Syllabus />
            <SportsActivity />
            <LiveTracking />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- parent dash content ENDS -->

    <v-footer color="purple darken-1" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ParentDash from "./parent_dash.vue";
import timeTable from "./Time_table.vue";
import Syllabus from "./syllabus.vue";
import SportsActivity from "./sport_activity.vue";
import LiveTracking from "./live_tracking.vue";

export default Vue.extend({
  name: "ParentNav",
  components: {
    ParentDash,
    timeTable,
    Syllabus,
    SportsActivity,
    LiveTracking
  },
  data: () => ({
    listOption: [
      { title: "Mark sheets" },
      { title: "Short Activity" },
      { title: "Leave Report" },
      { title: "Concefn Report" },
      { title: "Directory of school" },
      { title: "School Calender" },
      { title: "Appointment Request" },
      { title: "Student in Class" },
      { title: "Health Services" },
      { title: "Transportation" },
      { title: "Transfer Option" },
      { title: "Scholar ship Request" },
      { title: "Concession Requesting" },
      { title: "Feedback" },
      { title: "Information" },
      { title: "Information of School" },
      { title: "TC Request" }
    ],
    items: [
      { title: "Logout", icon: "mdi-exit-to-app" },
      { title: "Home", icon: "mdi-home-variant" }
    ],
    drawer1: false
  })
});
</script>

<style lang="scss" scoped>
.nav1 {
  background-color: #663dff;
  background-image: linear-gradient(
    319deg,
    #663dff 0%,
    #aa00ff 37%,
    #cc4499 100%
  );
}
</style>
