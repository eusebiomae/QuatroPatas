<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>


<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");

#app {
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
  font-weight: normal;
}

@media (min-width: 700px) {
  #app {
    width: fit-content;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }
}
</style>
