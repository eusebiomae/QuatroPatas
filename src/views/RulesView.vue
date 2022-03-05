<template>
  <div class="row" id="rules">
    <div class="col-lg-6 order-lg-last" id="text-left">
      <div class="">
        <h1 id="text-home">
          <b>Nossas Regras</b>
        </h1>
      </div>

      <div id="text-subhome">
        <p>
          Sem sombra de dúvidas queremos <b>o melhor</b> para os nossos <br />
          peludinhos, portanto queremos esclerecer quais são os requisitos
          <br />
          para você ter um novo membro na família:
        </p>
      </div>
      <div id="rules-details">
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
        <p>Todo animal merece respeito!</p>
      </div>
    </div>

    <div class="col-lg-6 order-first order-lg-last" id="img-home">
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
#rules {
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
  text-align: left;
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

li {
  margin: 0;
  margin-left: -6vh;
  padding: 5px 0 5px 25px;
  list-style: none;
  background-image: url("./src/assets/images/DogHand.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 3vh;
}

/* <!----------------------- Media Query -------------------> */

@media (min-width: 700px) {
  #rules {
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

  li {
    margin: 0;
    margin-left: -6vh;
    padding: 5px 0 5px 25px;
    list-style: none;
    background-image: url("./src/assets/images/DogHand.png");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 3vh;
  }
}
</style>

