<template>
  <div>
    <Header class="child" />
    <Main class="child" />
    <Footer class="child" />
  </div>
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
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
}
</style>
