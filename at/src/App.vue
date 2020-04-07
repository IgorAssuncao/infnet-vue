<template>
  <div id="app">
    <Header id="header" />
    <Main id="main" />
    <Footer id="footer" />
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
    Main
  }
};
</script>

<style>
#app {
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
}

#app #header,
#main,
#footer {
  margin: 0.5rem;
}
</style>
