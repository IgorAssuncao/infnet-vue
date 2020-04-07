<template>
  <v-app-bar app absolute color="primary" class="app-bar">
    <router-link :to="{ name: 'Home' }" class="router-link">
      <v-btn color="light-blue">
        <p class="text-center" color="yellow">Home</p>
      </v-btn>
    </router-link>

    <router-link :to="{ name: 'PlanetsHome' }" class="router-link">
      <v-btn>
        <p class="text-center">Planets</p>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<style scoped>
#row {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  margin: 0.25rem;
}

.app-bar .router-link {
  margin: 0.25rem;
}
</style>
