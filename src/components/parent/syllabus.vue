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
          <v-btn color="error" dark v-on="on">syllabus</v-btn>
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

          <!--syllabus card starts -->
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

                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title class="headline text-center">
                                {{ i.name }}
                              </v-list-item-title>
                              <v-divider></v-divider>
                              <v-list-item-text class="mt-3">
                                <p>Subject: {{ i.subject }}</p>
                                <p>Period: {{ i.period }}</p>
                                <p>Current Topic: {{ i.currentTopic }}</p>
                              </v-list-item-text>
                              <!-- progress bar starts-->
                              <div>
                                <p
                                  class="text-center subtitle-1 font-weight-light"
                                >
                                  Completion
                                </p>
                                <v-progress-linear
                                  v-model="valueDeterminate"
                                  color="deep-purple accent-4"
                                ></v-progress-linear>
                              </div>
                              <!-- progress bar ends -->
                              <v-card-text> </v-card-text>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </template>
                    </v-hover>
                  </v-item>
                </v-item-group>
              </v-col>
            </v-row>
            <!-- syllabus card starts -->
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
        name: "Pooja kapri",
        subject: "Eng lit.",
        period: "1",
        currentTopic: "poetry"
      },
      {
        name: "Rjeev Mehra",
        subject: "sub2",
        period: "2",
        currentTopic: "poetry"
      },
      {
        name: "Pooja kapri",
        subject: "Eng lit.",
        period: "3"
      },
      {
        name: "Rjeev Mehra",
        subject: "sub4",
        period: "4"
      },
      {
        name: "Pooja kapri",
        subject: "sub 5",
        period: "5",
        currentTopic: "poetry"
      },
      {
        name: "Rjeev Mehra",
        subject: "Eng lit.",
        period: "6",
        currentTopic: "poetry"
      }
    ],
    dialog: false,
    valueDeterminate: 30
  })
});
</script>
<style lang="scss" scoped></style>
