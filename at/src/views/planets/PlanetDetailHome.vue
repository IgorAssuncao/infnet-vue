<template>
  <div class="main-div">
    <v-form>
      <div class="row">
        <div class="item">
          <p class="subitem">Planet Name:</p>
          <v-text-field
            v-model="getPlanetByName(this.name).name"
            disabled
            class="subitem"
          ></v-text-field>
        </div>
        <div class="item">
          <p class="subitem">Planet Climate:</p>
          <v-text-field
            v-model="getPlanetByName(this.name).climate"
            disabled
            class="subitem"
          ></v-text-field>
        </div>
        <div class="item">
          <p class="subitem">Planet Terrain:</p>
          <v-text-field
            v-model="getPlanetByName(this.name).terrain"
            disabled
            class="subitem"
          ></v-text-field>
        </div>
        <div class="item">
          <p class="subitem">Planet Population:</p>
          <v-text-field
            v-model="getPlanetByName(this.name).population"
            disabled
            class="subitem"
          ></v-text-field>
        </div>
      </div>
      <div class="buttons-div row">
        <router-link :to="{ name: 'PlanetEdit', params: { name: this.name } }">
          <v-btn color="edit" class="item"><v-icon>mdi-pencil</v-icon></v-btn>
        </router-link>
        <router-link
          :to="{ name: 'PlanetDelete', params: { name: this.name } }"
        >
          <v-btn color="delete" class="item"
            ><v-icon>mdi-trash-can</v-icon></v-btn
          >
        </router-link>
      </div>
    </v-form>
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
