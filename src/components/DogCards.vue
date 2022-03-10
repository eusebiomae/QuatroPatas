<template>
  <div class="dogCard">
    <div class="dogCard-inner">
      <div class="dogCard-image-wrap">
        <img :src="dogCard.src" class="image" />
      </div>
      <div class="dogCard-detail">
        <h2>{{ dogCard.title }}</h2>
        <p>{{ dogCard.desc }}</p>
        <br />
      </div>

      <div class="btn-group">
        <div class="button-heart">
          <button
            v-on:click="openModalHeart"
            :addClass="heartActive"
            class="btn-heart"
            icon="fa-solid fa-heart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="heart-icon"
              v-if="heartNonActive"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="heart-icon-red"
              v-if="heartActive"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
              />
            </svg>
          </button>
        </div>

        <button v-on:click="openModal" class="btn-adote">Adote agora</button>
      </div>
    </div>
    <!--------------------------- Modal -------------------->
    <div class="button-modal">
      <div v-if="showModal" class="modal-overlay">
        <div class="card-modalAdopt">
          <div class="card-modalDetails">
            <img
              class="img-modalAdopt"
              src="@/assets/images/AdoptModalDog2.png"
              alt=""
            />
            <div class="text-modalAdopt">
              <h2>
                <b
                  >Você ganhou <br />
                  um novo amiguinho!</b
                >
              </h2>
            </div>
            <p class="subtext-modalAdopt">
              Obrigado por sua adoção, <br />
              ficamos felizes por você e por ele!
            </p>
          </div>
          <img
            class="icon-close"
            v-on:click="closeModal"
            v-if="showModal"
            src="@/assets/images/Close.png"
            alt=""
          />
        </div>
      </div>

      <div v-if="showModalHeart" class="modal-overlay">
        <div class="card-modal">
          <div class="card-modalDetails">
            <img
              class="img-modal"
              src="@/assets/images/FavModalDog.png"
              alt=""
            />
            <div class="text-modal">
              <h2><b>FAVORITADO COM AMOR!</b></h2>
            </div>
            <p class="subtext-modal">
              Obrigado por seu interesse <br />
              em nossos amigos! <br />
              Esperamos ansiosos pela sua adoção!
            </p>
          </div>
          <img
            class="icon-close"
            v-on:click="closeModalHeart"
            v-if="showModalHeart"
            src="@/assets/images/Close.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!---------------------------- Fim do Modal -------------------->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DogCards",
  props: ["dogCard"],
  data() {
    return {
      showModal: false,
      showModalHeart: false,
      heartActive: false,
      heartNonActive: true,
    };
  },

  methods: {
    openModal: function () {
      this.showModal = true;
    },

    closeModal: function () {
      this.showModal = false;
    },

    openModalHeart: function () {
      this.showModalHeart = true;
      this.heartActive = true;
      this.heartNonActive = false;
    },

    closeModalHeart: function () {
      this.showModalHeart = false;
    },

    closeRedHeart: function () {
      this.heartActive = false;
      this.heartNonActive = true;
    },
  },
});
</script>

<style scoped>
.dogCard {
  display: inline-block;
  width: 100%;
  margin-bottom: 5vh;
}
.dogCard-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 1000px;
  border-radius: 10px;
}
.card-modal {
  display: flex;
  margin-inline: 5vh;
  margin-top: 34vh;
  padding: 25px;
  width: 45vh;
  height: 35vh;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 300px;
  border-radius: 10px;
  background-color: #d88bb9;
  border: 5px solid #fff;
}
.card-modalAdopt {
  display: flex;
  margin-inline: 5vh;
  margin-top: 34vh;
  padding: 25px;
  width: 45vh;
  height: 35vh;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  perspective: 300px;
  border-radius: 10px;
  background-color: #91d88b;
  border: 5px solid #fff;
}
.img-modal {
  width: 15vh;
}
.img-modalAdopt {
  width: 55px;
  margin-bottom: -40px;
}

.icon-close {
  width: 25px;
  height: 25px;
  display: flex;
}
.text-modal {
  display: flex;
  float: right;
  margin-top: -20vh;
  margin-right: -15px;
  color: #000;
}
.text-modalAdopt {
  display: flex;
  float: right;
  margin-top: 2vh;
  margin-left: 18px;
  color: #000;
}
.subtext-modal {
  display: flex;
  float: right;
  margin-top: -12vh;
  margin-right: -25px;
  font-family: "Nunito", sans-serif;
  font-size: 10px;
  text-align: center;
  color: #000;
}
.subtext-modalAdopt {
  display: flex;
  float: right;
  margin-top: -7vh;
  margin-right: -5px;
  font-family: "Nunito", sans-serif;
  font-size: 11px;
  text-align: center;
  color: #000;
}

.dogCard-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.dogCard-detail {
  text-align: center;
  font-family: "Nunito", sans-serif;
}

.btn-group {
  margin-inline: 1vh;
  display: flex;
  align-items: center;
  vertical-align: middle;
}

.btn-adote {
  width: 25vh;
  height: 7vh;
  background-color: #7818d9;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  text-align: center;
}

.btn-adote:hover {
  background-color: #904dd3;
  text-align: center;
}

.btn-heart {
  width: 7vh;
  height: 7vh;
  background-color: #e2e2e2;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
}

.heart-icon {
  width: 20px;
  fill: #afaaaa;
}
.heart-icon:hover {
  width: 23px;
}
.heart-icon-red {
  width: 20px;
  fill: red;
}
.heart-icon-red:hover {
  width: 23px;
}

.button-heart {
  display: inline-block;
  margin-inline: 7px;
  margin-bottom: 0;
}

.button-modal {
  display: inline-block;
  margin-inline: 7px;
  margin-bottom: 0;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.95;
  z-index: 1;
}
.modal-img {
  top: 30vh;
  width: 35vh;
  height: 35vh;
  z-index: 1;
  position: fixed;
  margin-inline: 10vh;
  vertical-align: middle;
  align-items: center;
}

/* <!----------------------- Media Query --------------------> */
@media (min-width: 700px) {
  .dogCard {
    flex-basis: 33.33%;

    padding: 15px;
  }
  .dogCard-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 1000px;
    border-radius: 10px;
  }

  .dogCard-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .dogCard-detail {
    text-align: center;
  }

  .card-modal {
    display: flex;
    margin-inline: 75vh;
    margin-top: 25vh;
    padding: 25px;
    width: 70vh;
    height: 50vh;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 300px;
    border-radius: 10px;
    background-color: #d88bb9;
    border: 5px solid #fff;
  }
  .card-modalAdopt {
    display: flex;
    margin-inline: 75vh;
    margin-top: 25vh;
    padding: 25px;
    width: 70vh;
    height: 50vh;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    perspective: 300px;
    border-radius: 10px;
    background-color: #91d88b;
    border: 5px solid #fff;
  }
  .img-modal {
    width: 25vh;
  }
  .img-modalAdopt {
    width: 80px;
    /* margin-bottom: -40px; */
  }
  .icon-close {
    width: 30px;
    height: 30px;
    display: flex;
  }
  .text-modal {
    display: flex;
    float: right;
    margin-top: -33vh;
    font-size: 4vh;
    margin-right: -30px;
  }
  .text-modalAdopt {
    display: flex;
    float: right;
    font-size: 4vh;
    margin-right: 5px;
  }

  .subtext-modal {
    display: flex;
    float: right;
    margin-top: -20vh;
    margin-right: -30px;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    color: #000;
  }
  .subtext-modalAdopt {
    display: flex;
    float: right;
    margin-top: -65px;
    margin-right: 10px;
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    text-align: center;
    color: #000;
  }
  .btn-group {
    margin-inline: 3vh;
    display: flex;
    align-items: center;
    vertical-align: middle;
  }

  .btn-adote {
    width: 30vh;
    height: 7vh;
    background-color: #7818d9;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    text-align: center;
  }
  .btn-adote:hover {
    background-color: #fff;
    color: #000;
    text-align: center;
    border: 2px solid #7818d9;
  }
  .btn-heart {
    width: 7vh;
    height: 7vh;
    background-color: #e2e2e2;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
  }

  .heart-icon {
    width: 20px;
    fill: #afaaaa;
  }
  .heart-icon:hover {
    width: 23px;
  }
  .button-heart {
    display: inline-block;
    margin-inline: 2vh;
    margin-bottom: 0;
  }
  .button-modal {
    display: inline-block;
    margin-inline: 2vh;
    margin-bottom: 0;
  }
  .modal-overlay {
    position: fixed;
    /* background-size: cover; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.95;
    z-index: 1;
  }
  .modal-img {
    top: 20vh;
    left: 75vh;
    width: 65vh;
    height: 60vh;
    z-index: 1;
    position: fixed;
    margin-inline: 0;
  }
}
</style>
