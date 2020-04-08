<template>
  <div class="main-div">
    <v-form>
      <div class="row">
        <v-text-field
          v-model="planet.name"
          label="Name"
          required
          class="item"
        ></v-text-field>
        <v-text-field
          v-model="planet.climate"
          label="Climate"
          required
          class="item"
        ></v-text-field>
      </div>
      <div class="row">
        <v-text-field
          v-model="planet.terrain"
          label="Terrain"
          required
          class="item"
        ></v-text-field>
        <v-text-field
          v-model="planet.population"
          label="Population"
          required
          class="item"
        ></v-text-field>
      </div>
      <div class="buttons-div row">
        <v-btn color="confirm" class="item" @click="handleCreate"
          >Confirm</v-btn
        >
        <v-btn color="cancel" class="item" @click="returnToPlanets"
          >Cancel</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PlanetCreate",
  data() {
    return {
      planet: {
        name: "",
        climate: "",
        terrain: "",
        population: "",
      },
    };
  },
  methods: {
    ...mapActions(["createPlanet"]),
    handleCreate() {
      this.createPlanet(this.planet);
      alert("Success");
      return this.$router.go(-1);
    },
    returnToPlanets() {
      this.$router.push({ name: "PlanetsHome" });
    },
  },
};
</script>

<style scoped>
.main-div {
  margin: 0 30%;
}

.row {
  display: flex;
  flex-direction: row;
}

.item {
  margin: 0 0.5rem;
}

.buttons-div {
  display: flex;
  justify-content: center;
}
</style>
