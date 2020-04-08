<template>
  <div>
    <h1 class="secondary--text">Welcome</h1>
    <br />
    <h3 class="secondary--text">
      This project uses the
      <a class="secondary--text" href="https://swapi.co">The Star Wars API</a>
      as it's main API, even though it just reads from the API.
    </h3>

    <br />
    <h4>
      <a
        class="secondary--text"
        href="https://github.com/IgorAssuncao/infnet-vue/tree/master/at"
      >GitHub Repo</a>
    </h4>

    <br />
    <br />
    <h3 class="secondary--text">Stack:</h3>
    <v-list>
      <v-list-item-group class="item-group">
        <v-list-item v-for="tech in stack" v-bind:key="tech.name" class="item">
          <a v-bind:href="tech.url" class="secondary--text">{{ tech.name }}</a>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stack: [
        {
          name: "Vue.js",
          url: "https://vuejs.org/"
        },
        {
          name: "Vuetify.js",
          url: "https://vuetifyjs.com/"
        },
        {
          name: "Git",
          url: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
