<template>
  <v-layout>
    <v-container class="shrink">
      <v-tabs centered>
        <!-- tab 1.. -->
        <v-tab
          >One
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-tab>
        <v-tab-item>
          <v-row>
            <v-col v-for="person in sample1" :key="person.name" cols="6" md="4">
              <v-item-group>
                <v-item v-slot:default="{ active, toggle }">
                  <v-hover>
                    <template v-slot="{ hover }">
                      <v-card
                        :color="active ? 'purple accent-1' : ''"
                        :elevation="hover ? 8 : 2"
                        shaped="true"
                        height="200"
                        @click="toggle"
                      >
                        <v-scroll-y-transition>
                          <div
                            v-if="active"
                            class="display-3 flex-grow-1 text-center"
                          ></div>
                        </v-scroll-y-transition>

                        <!-- for icons  -->
                        <div class="text-center ">
                          <v-avatar class="mt-10" size="70" color="white">
                            <img :src="person.src" />
                          </v-avatar>

                          <!-- name of each cards  -->
                          <div class="font-weight-regular text-center title">
                            <p class="pt-2">
                              {{ person.name }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </template>
                  </v-hover>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- tab-2  -->
        <v-tab
          >Two
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-tab>
        <v-tab-item>
          <v-row>
            <v-col v-for="person in sample2" :key="person.name" cols="6" md="4">
              <v-item-group>
                <v-item v-slot:default="{ active, toggle }">
                  <v-hover>
                    <template v-slot="{ hover }">
                      <v-card
                        :elevation="hover ? 8 : 2"
                        :color="active ? 'purple accent-1' : ''"
                        shaped="true"
                        height="200"
                        @click="toggle"
                      >
                        <!-- for icons -->
                        <div class="text-center ">
                          <v-avatar class="mt-10" size="70" color="white">
                            <img :src="person.src" />
                          </v-avatar>

                          <!-- name of each cards  -->
                          <div class="font-weight-regular text-center title">
                            <p class="pt-2">
                              {{ person.name }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </template>
                  </v-hover>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- tab-3 -->
        <v-tab
          >Three
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-tab>
        <v-tab-item>
          <v-row>
            <v-col v-for="person in sample3" :key="person.name" cols="6" md="3">
              <v-item-group>
                <v-item v-slot:default="{ active, toggle }">
                  <v-hover>
                    <template v-slot="{ hover }">
                      <v-card
                        :color="active ? 'purple accent-1' : ''"
                        :elevation="hover ? 8 : 2"
                        shaped="true"
                        height="200"
                        @click="toggle"
                      >
                        <!-- for icons  -->
                        <div class="text-center ">
                          <v-avatar class="mt-10" size="70" color="white">
                            <img :src="person.src" />
                          </v-avatar>

                          <!-- name of each card  -->
                          <div class="font-weight-regular text-center title">
                            <p class="pt-2">
                              {{ person.name }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </template>
                  </v-hover>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AdminPage",
  data: () => ({
    sample1: [
      {
        name: "Student",
        src: "/page one icons/graduate.svg"
      },
      {
        name: "Teacher",
        src: "/page one icons/teacher.svg"
      },
      { name: "Staff", src: "/page one icons/staff.svg" }
    ],
    sample2: [
      { name: "Attendence", src: "/page two icons/attendence.svg" },
      { name: " Today's Time Table ", src: "/page two icons/time_table.svg" },
      { name: "Task for Staff and Teacher", src: "/page two icons/task.svg" },
      { name: "Salary", src: "/page two icons/salary.svg" },
      { name: "Student", src: "/page two icons/student-icon.png" },
      { name: "Student of the year", src: "/page two icons/trophy.png" },
      { name: "Scholarship Student", src: "/page two icons/scholarship.svg" },
      { name: "Birthday Reminder", src: "/page two icons/bday_reminder.png" },
      { name: "Library Report", src: "/page two icons/book.svg" }
    ],
    sample3: [
      { name: "Strength", src: "/page three icons/strength.svg" },
      { name: "Activity", src: "/page three icons/activity.svg" },
      { name: "Expense", src: "/page three icons/expense.png" },
      { name: "Report", src: "/page three icons/report.svg" }
    ]
  })
});
</script>

<style lang="scss" scoped></style>
