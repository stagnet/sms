<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
          v-for="(data, index) in stuDetail"
          :key="index.id"
        >
          <v-card max-height="350">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">{{
                  data.first_name
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  <p>Name: {{ data.first_name }} {{ data.last_name }}</p>
                  <p>Gender: {{ data.gender }}</p>
                  <p>Aadhar_no: {{ data.aadhar_no }}</p>
                  <p>E-mail:{{ data.email }}</p>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
  import Vue from "vue";
  import { mapState } from "vuex";
  export default Vue.extend({
    name: "test1",
    mounted() {
      this.$store.dispatch("loadStud");
    },
    computed: {
      ...mapState(["stuDetail"])
    }
  });
</script>
