<template>
  <div class="main-div">
    <p class="secondary--text item">Are you sure?</p>
    <p class="item">
      <v-btn color="confirm primary--text" class="button" @click="handleDeletePlanet">Confirm</v-btn>
      <v-btn color="cancel primary--text" class="button" @click="handleCancel">Cancel</v-btn>
    </p>
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
    }
  }
};
</script>

<style scoped>
.main-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  margin: 0 0.5rem;
}
</style>
