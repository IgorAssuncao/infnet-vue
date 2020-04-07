<template>
  <div>
    Name: {{ getPlanetByName(this.name).name }} Climate:
    {{ getPlanetByName(this.name).climate }} Terrain:
    {{ getPlanetByName(this.name).terrain }} Population:
    {{ getPlanetByName(this.name).population }}
    <v-btn>
      <router-link :to="{ name: 'PlanetEdit' }">Edit</router-link>
    </v-btn>
    <v-btn>
      <router-link :to="{ name: 'PlanetDelete' }">Delete</router-link>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlanetDetailHome",
  data() {
    return {
      name: this.$route.params.name,
    };
  },
  computed: mapGetters(["getPlanetByName"]),
};
</script>

<style></style>
