<template>
  <div class="row" id="row">
    <div class="col-lg-6 order-lg-last" id="text-left">
      <div class="">
        <h1 id="text-home">
          <b
            >Procurando um novo <br />
            amigo?</b
          >
        </h1>
      </div>

      <div id="text-subhome">
        <p>
          A Quatro Patas pode ajudar nessa missão! <br />
          Doguinhos e Gatinhos estão esperando para fazer você feliz! <br />
          Adote agora mesmo!
        </p>
      </div>

      <div id="button-home">
        <a href="/" class=""
          ><img
            id="btn-adote"
            src="@/assets/images/Adote.png"
            alt="Home Btn"
            class="btn"
        /></a>
        <a href="/rules" class=""
          ><img
            id="btn-regras"
            src="@/assets/images/NossasRegras.png"
            alt="Home Btn Regras"
            class="btn"
        /></a>
      </div>
    </div>

    <div class="col-lg-6 order-first order-lg-last" id="img-home">
      <img
        alt="Vue logo"
        class="logo-home"
        id="logo-home"
        src="@/assets/images/HomeDog2x.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<style scoped>
#logo-home {
  max-width: 45vh;
}
@media (min-width: 576px) {
  #row {
    width: 100%;
    height: 100%;
    display: -webkit-inline-box;
    position: static;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  #text-left {
    margin-top: 10vh;
    margin-right: 2vh;
    margin-left: 15vh;
    margin-bottom: 25vh;
  }

  #text-home {
    font-family: "Amatic Sc";
    font-size: 10vh;
  }

  #btn-adote {
    width: 190px;
    margin-top: 25px;
  }
  #btn-regras {
    width: 190px;
    margin-top: 25px;
    margin-left: 15px;
  }

  #img-home {
    margin-top: 10vh;
    margin-bottom: 25vh;
  }

  #logo-home {
    max-width: 75vh;
    margin-left: 14vh;
  }
}
</style>
