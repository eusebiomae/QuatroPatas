<template>
  <div id="home">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import Home from "../pages/Home.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
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

#home {
  width: fit-content;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
