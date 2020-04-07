<template>
  <div>
    <v-row>
      <v-form>
        {{ this.planet.name }}
        {{ getPlanetByName(this.planet.name) }}
        <v-text-field
          v-model="planet.climate"
          label="Climate"
          required
        ></v-text-field>
        <v-text-field
          v-model="planet.terrain"
          label="Terrain"
          required
        ></v-text-field>
        <v-text-field
          v-model="planet.population"
          label="Population"
          required
        ></v-text-field>
        <v-btn dark color="green" @click="handleEditPlanet">Submit</v-btn>
        <v-btn dark color="red" @click="handleCancel">Cancel</v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PlanetEdit",
  data() {
    return {
      planet: {
        name: this.$route.params.name,
        climate: "",
        terrain: "",
        population: 0,
      },
    };
  },
  computed: mapGetters(["getPlanetByName"]),
  methods: {
    ...mapActions(["editPlanet"]),
    handleEditPlanet() {
      this.editPlanet(this.planet);
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
};
</script>

<style></style>
