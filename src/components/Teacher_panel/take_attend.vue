<template>
  <v-container>
    <v-row>
      <!-- cards starts -->
      <v-col cols="12" md="6" v-for="info in stu" :key="info.name">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 8 : 2">
            <v-list>
              <v-list-item>
                <v-list-item-avatar
                  color="grey"
                  size="100"
                ></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    {{ info.name }}
                  </v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-text class="body-2">
                    <p>Roll no: {{ info.rollno }}</p>
                    <p>Father : {{ info.father }}</p>
                  </v-list-item-text>
                </v-list-item-content>
              </v-list-item>
              <div class="d-flex justify-space-between ma-2 ">
                <v-chip :class="`${status.present}`" small my-2
                  >Present{{ status.present }}</v-chip
                >
                <v-chip :class="`${status.absent}`" small my-2
                  >Absent{{ status.absent }}</v-chip
                >
              </div>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>
      <!-- cards ends -->
    </v-row>
    <!-- info chips -->
    <v-row justify="space-around">
      <v-chip small color="info">Total 60</v-chip>
      <v-chip small color="success ">Present 55</v-chip>
      <v-chip small color="error">Absent 5</v-chip>
    </v-row>
    <div class="ma-3">
      <v-progress-linear striped value="80" height="15" color="purple accent-2">
        Today class Strength
      </v-progress-linear>
    </div>

    <v-chip color="purple" text-color="white" class="float-right">
      Submit
    </v-chip>
  </v-container>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "takeAttendence",
    data: () => ({
      status: [{ present: false }, { absent: false }],
      stu: [
        {
          name: "Rakesh ramola",
          rollno: "16",
          father: "Sandeep ramola"
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
    // computed: {
    //   project_status() {
    //     if (this.project.status === "complete") return "green";
    //     else if (this.project.status === "ongoing") return "yellow";
    //     return "red";
    //   }
    // }
  });
</script>

<style scoped></style>
