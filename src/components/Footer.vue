<template>
  <footer class="footer">
    <a href="/" class="">
      <img
        alt="Vue logo"
        class="logo-footer"
        id="logo-footer"
        src="@/assets/images/LogoQuatroPatas.svg"
    /></a>
  </footer>
  <footer id="subfooter" class="footer">
    pinga
    <!-- <div id="subfooter-text">
      <p>Copyrigth 2022. Todos os direitos reservados</p>
      <p>Violência contra animais é crime. Denuncie 0800 600 6428</p>
    </div> -->
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
@media (min-width: 576px) {
  footer {
    width: 100%;
    height: 200px;
    background: #d9a9187a;
    position: absolute;
    display: flex;
    left: 0;
  }

  #subfooter {
    width: 100%;
    height: 20px;
    background: #6c3659;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  #logo-footer {
    width: 40vh;
    margin: 1vh;
    margin-inline: 19vh;
  }

  #subfooter-text {
  }
}
</style>
