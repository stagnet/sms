<template>
  <v-layout>
    <v-tabs background-color="purple accent-3" dark centered class="ma-2">
      <!-- tab 1 starts -->
      <v-tab>
        Test
      </v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col v-for="(i, index) in test" :key="index" cols="6" md="4">
              <v-select solo :items="expenData" :label="i.title"></v-select>
            </v-col>
            <!-- cards -->
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in stuData"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2" shaped="true">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          {{ stu.name }}
                        </v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                    <div class="ma-2">
                      <v-chip color="success" text-color="white" class="ma-2">
                        Marks
                      </v-chip>
                    </div>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
            <!-- cards ends -->
          </v-row>
          <!-- submitt button -->
          <div class="d-flex justify-end">
            <v-chip color="purple" text-color="white">
              Submit
            </v-chip>
          </div>
          <!-- submitt ends -->
        </v-container>
      </v-tab-item>
      <!-- tab1 ends -->

      <!-- tab 2 starts -->
      <v-tab>
        Assesment
      </v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col v-for="(i, index) in assesment" :key="index" cols="6" md="4">
              <v-select solo :items="expenData" :label="i.title"></v-select>
            </v-col>
            <!-- cards -->
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in stuData"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2" shaped="true">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          {{ stu.name }}
                        </v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                    <div class="ma-2">
                      <v-chip color="success" text-color="white" class="ma-2">
                        Marks
                      </v-chip>
                    </div>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
            <!-- cards ends -->
          </v-row>
        </v-container>
      </v-tab-item>
      <!-- tab2 ends -->

      <!-- tab 3 starts -->
      <v-tab>
        Extra Curricular
      </v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col v-for="(i, index) in assesment" :key="index" cols="6" md="4">
              <v-select solo :items="expenData" :label="i.title"></v-select>
            </v-col>
            <!-- cards -->
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in stuData"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 8 : 2" shaped="true">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar
                        color="grey"
                        size="100"
                      ></v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          {{ stu.name }}
                        </v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-text class="body-2">
                          <p>Roll no: {{ stu.rollno }}</p>
                          <p>Father : {{ stu.father }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                    <div class="ma-2">
                      <v-chip
                        color="light green"
                        text-color="white"
                        class="ma-2"
                      >
                        Grade
                      </v-chip>
                    </div>
                  </v-list>
                </v-card>
              </v-hover>
            </v-col>
            <!-- cards ends -->
          </v-row>
        </v-container>
      </v-tab-item>
      <!-- tab 3 ends -->
    </v-tabs>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "examReport",
  data: () => ({
    test: [
      { title: "Class" },
      { title: "Section" },
      { title: "Subject" },
      { title: "Test Date" },
      { title: "Test type" },
      { title: "Total Marks" }
    ],
    assesment: [
      { title: "Class" },
      { title: "Section" },
      { title: "Subject" },
      { title: "Exam Date" },
      { title: "Exam type" },
      { title: "Total marks" }
    ],
    expenData: ["I", "II", "III", "IV", "V", "VI", "VII"],
    stuData: [
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh"
      },
      {
        name: "Happy",
        rollno: "15",
        father: "Pradeep kumar"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri"
      },
      {
        name: "Ravi kumar",
        rollno: "22",
        father: "Rakesh kumar"
      },
      {
        name: "Anjali rawat",
        rollno: "3",
        father: "Laxhman Rawat"
      },
      {
        name: "Srishti rawat",
        rollno: "24",
        father: "Mukesh rawat"
      },
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh"
      },
      {
        name: "Billu barber",
        rollno: "3",
        father: "Banti "
      }
    ]
  })
});
</script>

<style scoped></style>
