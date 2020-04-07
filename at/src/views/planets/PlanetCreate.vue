<template>
  <div>
    <v-container>
      <h1>OIASOIOIOIA</h1>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PlanetCreate",
  data() {
    return {
      planet: {
        name: ""
      }
    };
  },
  methods: {
    ...mapActions(["createPlanet"])
  }
};
</script>

<style>
</style>