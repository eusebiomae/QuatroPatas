<template>
  <div id="rules">
    <Header />
    pinga
    <Footer />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "RulesView",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");

#rules {
  width: fit-content;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
