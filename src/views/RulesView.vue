<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />

  <div class="rules">
    <h1>Regras</h1>
    <!-- <p class="text-rules">Esta é a pagina de regras para adoção dos nossos pets. 
      Nossos bixinhos já estão vacinados, saudáveis e limpos, prontinhos para ser a alegria do seu lar!</p> -->
  </div>
  
</template>

<style>
@import '@/assets/base.css';

@media (min-width: 1024px) {
  .rules {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 375px) {
    .text-rules {
    text-align: justify;
  }
}
</style>
