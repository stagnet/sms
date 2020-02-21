<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="(stu, index) in balance" :key="index">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 8 : 2" shaped="true">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar
                    color="grey"
                    size="80"
                  ></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ stu.name }}
                    </v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-text class="body-2">
                      <p>Roll no: {{ stu.rollno }}</p>
                    </v-list-item-text>
                  </v-list-item-content>
                  <v-btn class="mx-2" fab dark medium color="purple">
                    <v-icon dark>mdi-numeric-6</v-icon>
                  </v-btn>
                </v-list-item>
              </v-list>
              <!-- expasion main -->
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Upload Report
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            v-for="(data, idx) in subjects"
                            :key="idx"
                          >
                            <span>{{ data.sub }}</span>
                            <!-- dropdown -->

                            <v-menu class="d-flex justify-end">
                              <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark v-on="on">
                                  Dropdown
                                </v-btn>
                              </template>
                              <v-list>
                                <v-list-item
                                  v-for="(item, index) in schoolreport"
                                  :key="index"
                                >
                                  <v-list-item-title>
                                    {{ item.grade }}
                                  </v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>

                            <!-- dropdown ends -->
                            <v-divider></v-divider>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <!-- tab1 ends -->
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "stuReport",
  data: () => ({
    balance: [
      {
        name: "Muskesh Singh",
        rollno: "3"
      },
      {
        name: "Happy",
        rollno: "15"
      },
      {
        name: "Anuj shastri",
        rollno: "2"
      },
      {
        name: "Ravi kumar",
        rollno: "22"
      },
      {
        name: "Anjali rawat",
        rollno: "3"
      },
      {
        name: "Srishti rawat",
        rollno: "24"
      },
      {
        name: "Rjeev kumar",
        rollno: "13"
      },
      {
        name: "Billu barber",
        rollno: "4"
      }
    ],
    schoolreport: [
      { grade: "A+" },
      { grade: "A" },
      { grade: "B+" },
      { grade: "B" },
      { grade: "C" },
      { grade: "D" }
    ],
    subjects: [
      { sub: "Punctuality" },
      { sub: "Disipline" },
      { sub: "Cleaniness" },
      { sub: "Sports Activity" },
      { sub: "Extra Curricular" },
      { sub: "Behaviour" }
    ]
  })
});
</script>

<style scoped></style>
