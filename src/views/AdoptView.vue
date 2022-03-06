<template>
  <div id="adopt">
    <div class="col-lg-6 order-lg-last" id="text-left">
      <div class="">
        <h1 id="text-home">
          <b>Adote Agora!</b>
        </h1>
      </div>
      <div id="text-subhome">
        <p>Temos vários peludinhos esperando para fazer um lar mais feliz!</p>
      </div>
    </div>

    <div class="col-lg-6 order-first order-lg-last" id="img-home">
      <img
        alt="Vue logo"
        class="logo-home"
        id="logo-home"
        src="@/assets/images/AdoptDog2x.png"
      />
    </div>
  </div>
  <section class="dogCards">
    <DogCards
      v-for="dogCard in dogCards"
      :key="dogCard.color"
      :dogCard="dogCard"
    />
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import DogCards from "../components/DogCards.vue";
export default defineComponent({
  name: "Adopt",
  components: { DogCards },
  data() {
    return {
      dogCards: [
        {
          title: "Luigy Gonzales",
          color: "blue",
          desc: "Buldog, macho",
          src: "./src/assets/Adopt/LuigyGonzales.png",
        },
        {
          title: "Shakira Lopez",
          color: "blue",
          desc: "Amarelo, fêmea",
          src: "./src/assets/Adopt/ShakiraLopez.png",
        },
        {
          title: "Nico Di Angelo",
          color: "blue",
          desc: "Frajola, macho",
          src: "./src/assets/Adopt/NicoDiAngelo.png",
        },

        // {
        //   title: "Bartolomeu II",
        //   color: "blue",
        //   src: "./src/assets/Adopt/BartolomeuII.png",
        // },
        // {
        //   title: "Marieta Soares",
        //   color: "blue",
        //   src: "./src/assets/Adopt/MarietaSoares.png",
        // },
        // {
        //   title: "Pity Caramelo",
        //   color: "blue",
        //   src: "./src/assets/Adopt/PityCaramelo.png",
        // },
        // {
        //   title: "Perseu Baptist",
        //   color: "blue",
        //   src: "./src/assets/Adopt/PerseuBaptist.png",
        // },
        // {
        //   title: "Theodora Blanc",
        //   color: "blue",
        //   src: "./src/assets/Adopt/TheodoraBlanc.png",
        // },
        // {
        //   title: "Rosinha Mali",
        //   color: "blue",
        //   src: "./src/assets/Adopt/RosinhaMali.png",
        // },
      ],
    };
  },
});
</script>

<style scoped>
#adopt {
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

.dogCards {
  /* display: flex;
  max-width: 1028px; */
  margin-top: -15vh;
  margin-inline: auto;
}

/* <!----------------------- Media Query -------------------> */

@media (min-width: 700px) {
  #adopt {
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
    text-align: left;
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
    max-width: 90vh;
    margin-left: 19vh;
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
  .dogCards {
    display: flex;
    max-width: 1028px;
    margin-top: -65vh;
    margin-inline: auto;
  }
}
</style>

