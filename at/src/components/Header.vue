<template>
  <v-row id="row" justify="center" class=".d-flex" dark>
    <v-footer dark absolute class="font-weight-medium">
      <v-col class="text-center" cols="12" md="4">
        <v-btn dark>
          <router-link :to="{name: 'Home'}">Home</router-link>
        </v-btn>
        <v-btn dark>
          <router-link :to="{name: 'PlanetsHome'}">Planets</router-link>
        </v-btn>
      </v-col>
    </v-footer>
  </v-row>
</template>

<style scoped>
#row {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  margin: 0.5rem;
}
</style>