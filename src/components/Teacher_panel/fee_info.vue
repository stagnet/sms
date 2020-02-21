<template>
  <v-layout>
    <v-tabs background-color="purple accent-3" dark centered class="ma-2">
      <!-- tab 1 starts -->
      <v-tab>
        Balance Status
      </v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
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
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <div class="float-right">
                    <v-chip color="error" text-color="white" class="ma-2"
                      >500</v-chip
                    >
                    <v-chip color="success" text-color="white" class="ma-2"
                      >Call</v-chip
                    >
                  </div>

                  <!-- expansion-panel starts -->
                  <v-expansion-panels hover>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Veiw Details
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                v-for="data in schoolExpense"
                                :key="data"
                              >
                                <span>Tution: {{ data.tution }}</span>
                                <v-divider></v-divider>
                                <p>Transport: {{ data.transport }}</p>
                                <v-divider></v-divider>

                                <p>Security: {{ data.security }}</p>
                                <v-divider></v-divider>

                                <p>Assesment: {{ data.assesment }}</p>
                                <v-divider></v-divider>

                                <p>Library: {{ data.library }}</p>
                                <v-divider></v-divider>

                                <p>Admission: {{ data.admission }}</p>
                                <v-divider></v-divider>

                                <p>Late Fee: {{ data.lateFee }}</p>
                                <v-divider></v-divider>

                                <p>Others: {{ data.others }}</p>
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
      </v-tab-item>
      <!-- tab1 ends -->

      <!-- tab 2 starts -->
      <v-tab>
        Payment Details
      </v-tab>
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(stu, index) in balance"
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
                          <p>Mobile: {{ stu.mobile }}</p>
                        </v-list-item-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <div class="float-right">
                    <v-chip color="error" text-color="white" class="ma-2"
                      >Call</v-chip
                    >
                    <v-chip color="success" text-color="white" class="ma-2"
                      >Paid</v-chip
                    >
                  </div>

                  <!-- expansion-panel starts -->
                  <v-expansion-panels hover>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Veiw Details
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-list>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                v-for="data in schoolExpense"
                                :key="data"
                              >
                                <span>Tution: {{ data.tution }}</span>
                                <v-divider></v-divider>
                                <p>Transport: {{ data.transport }}</p>
                                <v-divider></v-divider>

                                <p>Security: {{ data.security }}</p>
                                <v-divider></v-divider>

                                <p>Assesment: {{ data.assesment }}</p>
                                <v-divider></v-divider>

                                <p>Library: {{ data.library }}</p>
                                <v-divider></v-divider>

                                <p>Admission: {{ data.admission }}</p>
                                <v-divider></v-divider>

                                <p>Late Fee: {{ data.lateFee }}</p>
                                <v-divider></v-divider>

                                <p>Others: {{ data.others }}</p>
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
      </v-tab-item>
      <!-- tab2 ends -->
    </v-tabs>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "feeInfo",
  data: () => ({
    balance: [
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768"
      },
      {
        name: "Happy",
        rollno: "15",
        father: "Pradeep kumar",
        mobile: "7656347700"
      },
      {
        name: "Anuj shastri",
        rollno: "2",
        father: "Manoj shastri",
        mobile: "8763006812"
      },
      {
        name: "Ravi kumar",
        rollno: "22",
        father: "Rakesh kumar",
        mobile: "9670436638"
      },
      {
        name: "Anjali rawat",
        rollno: "3",
        father: "Laxhman Rawat",
        mobile: "9876567768"
      },
      {
        name: "Srishti rawat",
        rollno: "24",
        father: "Mukesh rawat",
        mobile: "9876567768"
      },
      {
        name: "Muskesh Singh",
        rollno: "3",
        father: "Mahesh Singh",
        mobile: "9876567768"
      },
      {
        name: "Billu barber",
        rollno: "3",
        father: "Banti ",
        mobile: "9876567768"
      }
    ],
    schoolExpense: [
      {
        tution: "2000",
        transport: "1000",
        security: "500",
        assesment: "600",
        library: "500",
        admission: "2000",
        lateFee: "600",
        others: "250"
      }
    ]
  })
});
</script>

<style scoped></style>
