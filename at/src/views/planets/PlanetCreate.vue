<template>
  <div>
    <v-row>
      <v-form> </v-form>
    </v-row>
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
      },
    };
  },
  methods: {
    ...mapActions(["createPlanet"]),
  },
};
</script>

<style></style>
