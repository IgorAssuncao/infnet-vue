<template>
  <div class="main-div">
    <v-row justify="center">
      <v-dialog persistent>
        Are you sure?
        <v-btn color="error" @click="handleDeletePlanet"></v-btn>
        <v-btn color="cancel" @click="handleCancel"></v-btn>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PlanetDelete",
  methods: {
    ...mapActions(["deletePlanet"]),
    handleDeletePlanet() {
      this.deletePlanet(this.$route.params.name);
      alert("Success");
      this.$router.push({ name: "PlanetsHome" });
    },
    handleCancel() {
      this.$router.push({ name: "PlanetsHome" });
    },
  },
};
</script>

<style scoped>
.main-div {
}
</style>
