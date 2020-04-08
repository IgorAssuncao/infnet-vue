<template>
  <v-app>
    <Header />
    <v-content class="main-component">
      <Main />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Main,
  },
};
</script>

<style scoped>
.main-component {
  margin: 1rem 2rem;
}
</style>
