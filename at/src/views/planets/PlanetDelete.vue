<template>
  <div>
    <v-btn class="ma-2" dark color="blue" v-on:click="handleDeletePlanetClick">Are you sure?</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PlanetDelete",
  methods: {
    ...mapActions(["deletePlanet"]),
    handleDeletePlanetClick() {
      this.deletePlanet(this.$route.params.name);
      this.$router.push({ name: "PlanetsHome" });
    }
  }
};
</script>

<style>
</style>