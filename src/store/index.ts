import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    // create empty list
    stuDetail: []
  },

  actions: {
    loadStud({ commit }) {
      console.log("student detail");
      axios
        .get("http://192.168.1.129/api/student/all")
        .then(data => {
          console.log(data.data);
          let detail = data.data;
          commit("SET_DETAIL", detail);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    SET_DETAIL(state, detail) {
      state.stuDetail = detail;
    }
  },
  modules: {}
});
