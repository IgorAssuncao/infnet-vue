import axios from "axios";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

const baseUrl = "https://swapi.co/api/";

const axiosClient = axios.create({
  baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Vue.use(VueAxios, axiosClient);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
