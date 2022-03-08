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
          <button class="btn-heart" icon="fa-solid fa-heart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="heart-icon"
            >
              <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
              />
            </svg>
          </button>
        </div>

        <div class="button-modal">
          <button class="btn-adote">Adote agora</button>
        </div>
      </div>
    </div>
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
    };
  },

  methods: {
    openModal: function () {
      this.showModal = true;
    },

    closeModal: function () {
      this.showModal = false;
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
}

.dogCard-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.dogCard-detail {
  text-align: center;
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
  font-size: 16px;
  text-align: center;
}

.btn-heart {
  width: 7vh;
  height: 7vh;
  background-color: #e2e2e2;
  border: none;
  border-radius: 10px;
  color: #fff;
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
  margin-inline: 7px;
  margin-bottom: 0;
}

.button-modal {
  display: inline-block;
  margin-inline: 7px;
  margin-bottom: 0;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
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
  }

  .dogCard-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .dogCard-detail {
    text-align: center;
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
    background-color: #904dd3;
    font-size: 16px;
    text-align: center;
  }
  .btn-heart {
    width: 7vh;
    height: 7vh;
    background-color: #e2e2e2;
    border: none;
    border-radius: 10px;
    color: #fff;
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
}
</style>
