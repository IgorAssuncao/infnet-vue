<template>
  <div>
    <div class="create-planet-div">
      <v-btn color="secondary" class="primary--text button">
        <router-link :to="{ name: 'PlanetCreate' }">Create Planet</router-link>
      </v-btn>
    </div>
    <v-list>
      <v-list-item-group class="item-group">
        <v-list-item
          v-for="planetObj in getPlanets"
          v-bind:key="planetObj.name"
          class="item"
        >
          <div>
            <router-link
              :to="{ name: 'PlanetDetail', params: { name: planetObj.name } }"
              class="router-link"
              ><p class="secondary--text">{{ planetObj.name }}</p></router-link
            >
          </div>
          <router-link
            :to="{ name: 'PlanetEdit', params: { name: planetObj.name } }"
          >
            <v-btn color="edit" class="button primary--text">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </router-link>
          <router-link
            :to="{ name: 'PlanetDelete', params: { name: planetObj.name } }"
          >
            <v-btn color="delete" class="button primary--text">
              <v-icon>mdi-trash-can</v-icon></v-btn
            >
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
  mounted() {
    if (this.getFirstTime) {
      this.fetchPlanets();
      this.changeFirstTime();
    }
  },
};
</script>

<style scoped>
.create-planet-div {
  margin: 0.5rem;
  margin-left: 90%;
}

.item-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.item * {
  margin: 0 0.5rem;
}

.item div {
  width: 90%;
}

.router-link {
  width: 100%;
}
</style>
