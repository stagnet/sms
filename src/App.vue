<template>
  <v-app>
    <!-- <ParentNav /> -->
    <!-- <test1 /> -->
    <takeAttendence />
    <!-- <navbar />
    <feeInfo />
    <vaccancy />
    <stuReport />
    <examReport /> -->
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";

  // import test1 from "./components/test_1.vue";
  // import ParentNav from "./components/parent/parent_nav.vue";
  // import navbar from "./components/admin_folder/Navbar.vue";
  // import feeInfo from "./components/Teacher_panel/fee_info.vue";
  import takeAttendence from "./components/Teacher_panel/take_attend.vue";
  // import vaccancy from "./components/Teacher_panel/vaccency.vue";
  // import stuReport from "./components/Teacher_panel/student R&B.vue";
  // import examReport from "./components//Teacher_panel/exam_report.vue";

  export default Vue.extend({
    name: "App",
    components: {
      // test1,
      takeAttendence
      // ParentNav
      //   navbar,
      //   feeInfo,
      //   vaccancy,
      //   stuReport,
      //   examReport
    },

    data() {
      return {
        // put object here...
      };
    }
  });
</script>
