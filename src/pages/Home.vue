<template>
  <div class="col-md-6" id="text-left">
    <div class="">
      <h1 id="text-home">
        <b
          >Procurando um novo <br />
          amigo?</b
        >
      </h1>
    </div>

    <div id="text-subhome">
      <p>A Quatro Patas pode ajudar nessa missão!</p>
      <p>Doguinhos e Gatinhos estão esperando para fazer você feliz!</p>
      <p>Adote agora mesmo!</p>
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
  <div class="col-md-6">
    <img
      alt="Vue logo"
      class="logo-home"
      id="logo-home"
      src="@/assets/images/HomeDog2x.png"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<style scoped>
/* main {
  background-color: #e5e5e5;
} */

#text-left {
  margin-top: 25vh;
}

#text-home {
  font-family: "Amatic Sc";
  font-size: 10vh;
  margin-left: -10vh;
  margin-top: -15vh;
}
#text-subhome {
  margin-left: -10vh;
}
#button-home {
  margin-left: -10vh;
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

#logo-home {
  width: 95vh;
  margin-inline: 18vh;
}
</style>
