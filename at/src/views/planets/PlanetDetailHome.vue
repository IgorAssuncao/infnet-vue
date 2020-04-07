<template>
  <div>
    Name: {{ getPlanetByName(this.name).name }}
    Climate: {{ getPlanetByName(this.name).climate }}
    Terrain: {{ getPlanetByName(this.name).terrain }}
    Population: {{ getPlanetByName(this.name).population }}
    <router-link :to="{ name:'PlanetEdit', params: { name: this.name }}">
      <v-btn>Edit</v-btn>
    </router-link>
    <router-link :to="{ name:'PlanetDelete', params: { name: this.name }}">
      <v-btn>Delete</v-btn>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlanetDetailHome",
  data() {
    return {
      name: this.$route.params.name
    };
  },
  computed: mapGetters(["getPlanetByName"])
};
</script>

<style>
</style>