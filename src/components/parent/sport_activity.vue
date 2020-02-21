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
          <v-btn color="info" dark v-on="on">Sports Activity</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="purple draken-1">
            <v-btn icon dark @click="dialog = !dialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = !dialog">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <br />
          <!-- Tab starts -->
          <v-tabs background-color="purple accent-2" dark centered>
            <v-tab>
              Upcoming Activites
            </v-tab>
            <!--sports cards start -->
            <v-tab-item>
              <v-container>
                <v-row justify="center">
                  <v-col
                    cols="6"
                    md="4"
                    v-for="i in upcomingActivity"
                    :key="i.name"
                  >
                    <v-item-group>
                      <v-item v-slot:default="{ active, toggle }">
                        <v-hover>
                          <template v-slot="{ hover }">
                            <v-card
                              :color="active ? 'purple accent-1' : ''"
                              :elevation="hover ? 10 : 2"
                              shaped="true"
                              @click="toggle"
                              class="mt-5"
                            >
                              <v-scroll-y-transition>
                                <div
                                  v-if="active"
                                  class="display-3 flex-grow-1 text-center"
                                ></div>
                              </v-scroll-y-transition>

                              <!-- avatar -->
                              <div id="avatar" class="text-center ">
                                <v-avatar
                                  size="70"
                                  color="purple lighten-2"
                                  class="mt-n8"
                                >
                                </v-avatar>
                              </div>
                              <!-- avatar ends -->

                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title class="title text-center">
                                    {{ i.Sport }}
                                  </v-list-item-title>

                                  <v-divider></v-divider>
                                  <v-list-item-text class="mt-3">
                                    <p>Date: {{ i.date }}</p>
                                    <p>Time: {{ i.Time }}</p>
                                    <p>Venue: {{ i.venue }}</p>
                                  </v-list-item-text>
                                  <v-card-text class="text-center">
                                    <v-chip color="pink lighten-2">
                                      {{ i.status }}
                                    </v-chip>
                                  </v-card-text>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </template>
                        </v-hover>
                      </v-item>
                    </v-item-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab>Past Activites </v-tab>
            <v-tab-item>
              <v-container>
                <v-row justify="center">
                  <v-col
                    cols="6"
                    md="4"
                    v-for="i in pastActivity"
                    :key="i.name"
                  >
                    <v-item-group>
                      <v-item v-slot:default="{ active, toggle }">
                        <v-hover>
                          <template v-slot="{ hover }">
                            <v-card
                              :color="active ? 'purple accent-1' : ''"
                              :elevation="hover ? 10 : 2"
                              shaped="true"
                              @click="toggle"
                              class="mt-5"
                            >
                              <v-scroll-y-transition>
                                <div
                                  v-if="active"
                                  class="display-3 flex-grow-1 text-center"
                                ></div>
                              </v-scroll-y-transition>

                              <!-- avatar -->
                              <div id="avatar" class="text-center ">
                                <v-avatar
                                  size="70"
                                  color="purple accent-2"
                                  class="mt-n8"
                                >
                                </v-avatar>
                              </div>
                              <!-- avatar ends -->

                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title class="title text-center">
                                    {{ i.Sport }}
                                  </v-list-item-title>

                                  <v-divider></v-divider>
                                  <v-list-item-text class="mt-3">
                                    <p>Date: {{ i.date }}</p>
                                    <p>Time: {{ i.Time }}</p>
                                    <p>Venue: {{ i.venue }}</p>
                                  </v-list-item-text>
                                  <v-card-text class="text-center">
                                    <v-chip color="pink lighten-2">
                                      {{ i.status }}
                                    </v-chip>
                                  </v-card-text>
                                </v-list-item-content>
                              </v-list-item>
                            </v-card>
                          </template>
                        </v-hover>
                      </v-item>
                    </v-item-group>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SportsActivity",
  data: () => ({
    dialog: false,
    upcomingActivity: [
      {
        Sport: "High Jump",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      },
      {
        Sport: "High Jump",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      },
      {
        Sport: "High Jump",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "Participate Now"
      }
    ],
    pastActivity: [
      {
        Sport: "Chess",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      },
      {
        Sport: "Chess",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      },
      {
        Sport: "Chess",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      },
      {
        Sport: "Running",
        date: "20-1-2020",
        Time: "10:20 am",
        venue: " Indoor Ground",
        status: "chealse"
      }
    ]
  })
});
</script>
