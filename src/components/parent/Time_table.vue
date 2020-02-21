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
          <v-btn color="primary" dark v-on="on">Time Table</v-btn>
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
          <!--Time table card starts -->
          <v-container>
            <v-row justify="center">
              <v-col cols="6" md="4" v-for="i in table" :key="i.name">
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
                              class="mt-n6"
                            >
                            </v-avatar>
                          </div>
                          <!-- avatar ends -->

                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title class="title text-center">
                                {{ i.name }}
                              </v-list-item-title>
                              <v-divider></v-divider>
                              <v-list-item-text class="mt-3">
                                <p>Name: {{ i.name }}</p>
                                <p>Subject: {{ i.subject }}</p>
                                <p>Duration: {{ i.duration }}</p>
                              </v-list-item-text>
                              <v-card-text>
                                <v-chip :color="getstatus(i.text)">
                                  {{ i.Status }}
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
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "timeTable",
  data: () => ({
    table: [
      {
        name: "Teacher_name1",
        subject: "sub1",
        duration: "timing1",
        period: "1",
        Status: "Regular"
      },
      {
        name: "Teacher_name2",
        subject: "sub2",
        duration: "timing2",
        period: "2",
        Status: "Assigned"
      },
      {
        name: "Teacher_name3",
        subject: "sub3",
        duration: "timing3",
        period: "3",
        Status: "Regular"
      },
      {
        name: "Teacher_name4",
        subject: "sub4",
        duration: "timing4",
        period: "4",
        Status: "Assigned"
      },
      {
        name: "Teacher_name5",
        subject: "sub 5",
        duration: "timing 5",
        period: "5",
        Status: "Regular"
      },
      {
        name: "Teacher_name6",
        subject: "sub 6",
        duration: "timing 6",
        period: "6",
        Status: "Assigned"
      }
    ],
    dialog: false
  }),
  methods: {
    getstatus(text: any) {
      if (text == "Regular") return "green";
      else if (text == "Assigned") return "teal";
    }
  }
});
</script>
<style lang="scss" scoped></style>
