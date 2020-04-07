import Vue from "vue";
import planetsService from "./modules/planetsService";

const services = {
  planetsService,
};

export default (service) => services[service](Vue.axios);
