import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/errors/NotFound.vue";
import Home from "../views/Home.vue";
import PlanetCreate from "../views/planets/PlanetCreate.vue";
import PlanetDelete from "../views/planets/PlanetDelete.vue";
import PlanetDetail from "../views/planets/PlanetDetail.vue";
import PlanetDetailHome from "../views/planets/PlanetDetailHome.vue";
import PlanetEdit from "../views/planets/PlanetEdit.vue";
import PlanetsHome from "../views/planets/PlanetsHome.vue";
import PlanetsList from "../views/planets/PlanetsList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/planets",
    component: PlanetsHome,
    children: [
      {
        path: "",
        name: "PlanetsHome",
        component: PlanetsList,
      },
      {
        path: "create",
        name: "PlanetCreate",
        component: PlanetCreate,
      },
      {
        path: ":name",
        component: PlanetDetail,
        children: [
          {
            path: "",
            name: "PlanetDetail",
            component: PlanetDetailHome,
          },
          {
            path: "edit",
            name: "PlanetEdit",
            component: PlanetEdit,
          },
          {
            path: "delete",
            name: "PlanetDelete",
            component: PlanetDelete,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
