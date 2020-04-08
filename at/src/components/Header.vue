<template>
  <v-app-bar app absolute class="app-bar">
    <router-link :to="{ name: 'Home' }" class="router-link">
      <v-btn color="secondary" class="primary--text">
        Home
      </v-btn>
    </router-link>

    <router-link :to="{ name: 'PlanetsHome' }" class="router-link">
      <v-btn color="secondary" class="primary--text">
        Planets
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<style scoped>
.router-link {
  margin: 0 0.25rem;
}
</style>
