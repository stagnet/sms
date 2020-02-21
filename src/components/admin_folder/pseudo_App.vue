<template>
  <v-app>
    <navbar />
    <AdminPage />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import navbar from "./components/admin_folder/Navbar.vue";
import AdminPage from "./components/admin_folder/admin_page.vue";
// import ParentAdmin from "./components/parent_admin.vue"

export default Vue.extend({
  name: "App",
  components: {
    navbar,
    AdminPage
    // ParentAdmin
  },
  data() {
    return {
      // put object here...
    };
  }
});
</script>
