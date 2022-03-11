<template>
  <div class="home">
    <div class="col-lg-6 order-lg-last" id="text-left">
      <div class="">
        <h1 class="text-home">
          <b
            >Procurando um novo <br />
            amigo?</b
          >
        </h1>
      </div>

      <div class="text-subhome">
        <p>
          A <b>Quatro Patas</b> pode ajudar nessa missão! <br />
          Doguinhos e Gatinhos estão esperando para fazer você feliz! <br />
          Adote agora mesmo!
        </p>
      </div>

      <div class="btn-group">
        <router-link to="/adopt">
          <div>
            <button class="btn-adote">Adote agora</button>
          </div>
        </router-link>

        <router-link to="/rules">
          <div>
            <button class="btn-rules">Nossas Regras</button>
          </div>
        </router-link>
      </div>
    </div>

    <div class="col-lg-6 order-first order-lg-last" id="img-home">
      <img
        alt="Vue logo"
        class="logo-home"
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
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

#text-left {
  margin-top: 75vh;
}

.text-home {
  font-family: "Amatic Sc";
  font-size: 7vh;
  text-align: center;
  margin-left: -45vh;
  margin-bottom: 5vh;
}

.text-subhome {
  text-align: center;
  font-size: initial;
  font-family: "Nunito", sans-serif;
  margin-left: -45vh;
  margin-bottom: 5vh;
}

.btn-group {
  margin-left: -39vh;
  margin-bottom: 5vh;
}
.btn-adote {
  width: 35vh;
  height: 10vh;
  background-color: #7818d9;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 3vh;
  margin-top: 2vh;
}
.btn-adote:hover {
  background-color: #fff;
  color: #000;
  text-align: center;
  border: 2px solid #904dd3;
}
.btn-rules {
  width: 35vh;
  height: 10vh;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  border: 2px solid #904dd3;
  color: #000;
  font-size: 18px;
  text-align: center;
  margin-bottom: 3vh;
}
.btn-rules:hover {
  background-color: #7818d9;
  color: #fff;
  text-align: center;
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
  margin-top: 20vh;
  margin-bottom: 25vh;
}

.logo-home {
  max-width: 45vh;
}

/* <!------------------------ Media Query Desktop--------------- > */

@media (min-width: 700px) {
  .home {
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

  .text-home {
    font-family: "Amatic Sc";
    font-size: 10vh;
    margin-left: 0;
    margin-bottom: 2vh;
    margin-top: 15vh;
  }

  .text-subhome {
    text-align: left;
    font-size: initial;
    font-family: "Nunito", sans-serif;
    margin-left: 0;
    margin-bottom: 2vh;
  }
  .btn-group {
    margin-top: 5vh;
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 0;
    margin-bottom: 0;
  }

  .btn-adote {
    width: 30vh;
    height: 8vh;
    background-color: #7818d9;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    margin-right: 3vh;
    margin-bottom: 0;
    margin-top: 0;
  }
  .btn-adote:hover {
    background-color: #fff;
    color: #000;
    text-align: center;
    border: 2px solid #7818d9;
  }
  .btn-rules {
    width: 30vh;
    height: 8vh;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    border: 2px solid #7818d9;
    color: #000;
    font-size: 15px;
    text-align: center;
    margin-bottom: 0;
  }
  .btn-rules:hover {
    background-color: #7818d9;
    color: #fff;
    text-align: center;
  }

  #img-home {
    margin-top: 10vh;
    margin-bottom: 25vh;
  }

  .logo-home {
    max-width: 95vh;
    margin-left: 17vh;
  }
}
</style>
