<template>
  <v-container>
    <v-col cols="12" md="12" justify="center">
      <v-card class="mx-auto">
        <v-img
          class="white--text align-end"
          height="400px"
          src="/building-ceiling-classroom-daylight-373488.jpg"
          aspect-ratio="1"
        >
        </v-img>
        <v-card-title class="align-center">Shri Guru Ram Rai</v-card-title>

        <v-card-text class="text--primary font-weight-regular">
          <div>
            Every year, hundred of thousands of high school seniors make bad
            choices about where - or whether - to go to college. Some who would
            excel at top-ranked institutions opt for second-tier
            institutions.<br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium corporis, officiis et vitae quis animi ullam dolorum
            tempore sequi nesciunt?
          </div>
        </v-card-text>
        <v-chip color="accent" class="float-right ma-2"
          >Call 0135-267980</v-chip
        >
        <div class="ma-5">
          <span class="font-weight-medium">Qualification</span><br />
          <span class="font-weight-medium">Experience</span><br />
          <span class="font-weight-medium">Last Date</span>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "vaccancy",
  data: () => ({})
});
</script>

<style scoped></style>
