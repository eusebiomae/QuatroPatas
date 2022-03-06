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
          A <b>Quatro Patas</b> pode ajudar nessa missão! <br />
          Doguinhos e Gatinhos estão esperando para fazer você feliz! <br />
          Adote agora mesmo!
        </p>
      </div>

      <div id="button-home">
        <router-link to="/adopt"
          ><img
            id="btn-adote"
            src="@/assets/images/Adote.png"
            alt="Home Btn"
            class="btn"
        /></router-link>
        <router-link to="/rules"
          ><img
            id="btn-regras"
            src="@/assets/images/NossasRegras.png"
            alt="Home Btn Regras"
            class="btn"
        /></router-link>
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
#row {
  width: 100%;
  height: 100%;
  display: block;
}

#text-left {
  margin-top: 20vh;
}

#text-home {
  font-family: "Amatic Sc";
  font-size: 7vh;
  text-align: center;
}

#text-subhome {
  text-align: center;
  font-size: initial;
}

#btn-adote {
  width: auto;
  margin-top: 25px;
}
#btn-regras {
  width: auto;
  margin-top: 25px;
}

#img-home {
  margin-top: 10vh;
  margin-bottom: 25vh;
}

#logo-home {
  max-width: 45vh;
}

/* <!------------------------Media Query --------------- > */

@media (min-width: 700px) {
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

  #text-subhome {
    text-align: left;
    font-size: initial;
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
    max-width: 95vh;
    margin-left: 17vh;
  }
}
</style>
