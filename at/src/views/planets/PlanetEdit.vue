<template>
  <div class="main-div">
    <v-form>
      <div class="row">
        <div class="item">
          <p class="subitem">Planet Name:</p>
          <v-text-field
            v-model="planet.name"
            disabled
            class="subitem"
          ></v-text-field>
        </div>
        <div class="item">
          <p class="subitem">Planet Climate:</p>
          <v-text-field
            v-model="planet.climate"
            required
            class="subitem"
          ></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <p class="subitem">Planet Terrain:</p>
          <v-text-field
            v-model="planet.terrain"
            required
            class="subitem"
          ></v-text-field>
        </div>
        <div class="item">
          <p class="subitem">Planet Population:</p>
          <v-text-field
            v-model="planet.population"
            required
            class="subitem"
          ></v-text-field>
        </div>
      </div>
      <div class="buttons-div row">
        <v-btn color="confirm" class="item" @click="handleEditPlanet"
          ><v-icon>mdi-checkbox-marked-circle</v-icon></v-btn
        >
        <v-btn color="cancel" class="item" @click="handleCancel"
          ><v-icon>mdi-cancel</v-icon></v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PlanetEdit",
  data() {
    return {
      planet: {
        name: this.$route.params.name,
        climate: "",
        terrain: "",
        population: "",
      },
    };
  },
  computed: mapGetters(["getPlanetByName"]),
  methods: {
    ...mapActions(["editPlanet"]),
    handleEditPlanet() {
      this.editPlanet(this.planet);
      alert("Success");
      this.$router.push({
        name: "PlanetDetail",
        params: { name: this.planet.name },
      });
    },
    handleCancel() {
      this.$router.push({
        name: "PlanetDetail",
        params: { name: this.planet.name },
      });
    },
  },
  created() {
    this.planet = this.getPlanetByName(this.planet.name);
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
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
}

.item .subitem {
  margin: 0.25rem;
}

.buttons-div {
  display: flex;
  justify-content: center;
}
</style>
