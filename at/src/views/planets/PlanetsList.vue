<template>
  <div>
    <v-btn>
      <router-link :to="{ name: 'PlanetCreate' }">Create Planet</router-link>
    </v-btn>
    <div class="main-list">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="planetObj in getPlanets"
            v-bind:key="planetObj.name"
          >
            <router-link
              :to="{ name: 'PlanetDetail', params: { name: planetObj.name } }"
              >{{ planetObj.name }}</router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PlanetsList",
  computed: mapGetters(["getPlanets", "getFirstTime"]),
  methods: {
    ...mapActions(["fetchPlanets", "changeFirstTime"]),
  },
  created() {
    if (this.getFirstTime) {
      this.fetchPlanets();
      this.changeFirstTime();
    }
  },
};
</script>
