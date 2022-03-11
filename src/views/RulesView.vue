<template>
  <div class="rules">
    <div class="text-left">
      <div class="">
        <h1 class="text-home">
          <b>Nossas Regras</b>
        </h1>
      </div>

      <div class="text-subhome">
        <p>
          Sem sombra de dúvidas queremos <b>o melhor</b> para os nossos <br />
          peludinhos, portanto queremos esclerecer quais são os requisitos
          <br />
          para você ter um novo membro na família:
        </p>
      </div>
      <div class="rules-details">
        <ul>
          <li>Carinho e atenção não pode faltar;</li>
          <li>Cuide de pulgas, carrapatos, entre outros parasitas;</li>
          <li>
            Mantenha as vacinas em dia, é importante para ele(a) e para você;
          </li>
          <li>
            A castração é importante para previnir doenças e a procriação.
          </li>
        </ul>
        <br />
        <p>Todo animal merece respeito!</p>
      </div>

      <div class="button-rules-adopt">
        <router-link to="/adopt">
          <div>
            <button class="btn-adote">Adote agora</button>
          </div>
        </router-link>
      </div>
    </div>

    <div class="img-home">
      <img
        alt="Vue logo"
        class="logo-home"
        id="logo-home"
        src="@/assets/images/RulesDog2x.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Rules",
};
</script>

<style scoped>
.rules {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.text-left {
  margin-top: 70vh;
  margin-left: -45vh;
  margin-bottom: 10vh;
}

.text-home {
  font-family: "Amatic Sc";
  font-size: 7vh;
  text-align: center;
  margin-bottom: 3vh;
}

.text-subhome {
  text-align: left;
  font-size: initial;
  font-family: "Nunito", sans-serif;
  margin-bottom: 5vh;
}

.button-rules-adopt {
  margin-top: 3vh;
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
  margin-right: 3vh;
  margin-bottom: 0;
  margin-top: 5vh;
  margin-inline: 5vh;
}
.btn-adote:hover {
  background-color: #fff;
  color: #000;
  text-align: center;
  border: 2px solid #7818d9;
}

.img-home {
  margin-top: 20vh;
  margin-bottom: 25vh;
}

.logo-home {
  max-width: 45vh;
}

li {
  margin: 0;
  margin-left: -6vh;
  padding: 5px 0 5px 25px;
  list-style: none;
  background-image: url("./src/assets/images/DogHand.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 3vh;
  font-family: "Nunito", sans-serif;
}

p {
  font-family: "Nunito", sans-serif;
}

/* <!----------------------- Media Query Desktop -------------------> */

@media (min-width: 700px) {
  .rules {
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

  .text-left {
    margin-top: 25vh;
    margin-right: 2vh;
    margin-left: 15vh;
    margin-bottom: 25vh;
  }

  .text-home {
    font-family: "Amatic Sc";
    font-size: 10vh;
    margin-bottom: 3vh;
  }

  .text-subhome {
    text-align: left;
    font-size: initial;
    font-family: "Nunito", sans-serif;
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
    margin-top: 7vh;
    margin-inline: 0;
  }
  .btn-adote:hover {
    background-color: #fff;
    color: #000;
    text-align: center;
    border: 2px solid #7818d9;
  }

  .img-home {
    margin-top: 10vh;
    margin-bottom: 25vh;
  }

  .logo-home {
    max-width: 95vh;
    margin-left: 15vh;
  }

  li {
    margin: 0;
    margin-left: -6vh;
    padding: 5px 0 5px 25px;
    list-style: none;
    background-image: url("./src/assets/images/DogHand.png");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 3vh;
    font-family: "Nunito", sans-serif;
  }
}
</style>

