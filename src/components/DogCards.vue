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

      <div id="button-home">
        <router-link to=""
          ><img
            id="btn-heart"
            src="@/assets/images/heart2.png"
            alt="Home Btn"
            class="btn"
        /></router-link>
      </div>

      <div id="button-modal">
        <span>
          <img
            id="btn-adote"
            src="@/assets/images/Adote.png"
            alt="Home Btn"
            class="btn"
        /></span>

        <!-- <div>
          <img
            id="btn-adote"
            src="@/assets/images/Close2x.png"
            alt="Home Btn"
            class="btn"
          />
        </div> -->

        <!-- <div id="menu-items" :class="{ active: showModal }"></div> -->
      </div>
    </div>
  </div>
  <!-- <modal v-if="showModal" v-on:click="openModal" id="modal-overlay">
    <span slot="header">Conteudo</span>
  </modal> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DogCards",
  props: ["dogCard"],
  // data() {
  //   return {
  //     showModal: false,
  //   };
  // },

  // methods: {
  //   openModal: function () {
  //     this.showModal = true;
  //   },

  //   closeModal: function () {
  //     this.showModal = false;
  //   },
  // },
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
#btn-adote {
  width: 25vh;
}
#btn-heart {
  width: 7vh;
  height: auto;
}
#button-home {
  display: inline-block;
  margin-inline: 7px;
  margin-bottom: 0;
}
#button-modal {
  display: inline-block;
  margin-inline: 7px;
  margin-bottom: 0;
}
#modal-overlay {
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

  #btn-adote {
    width: 25vh;
  }
  #btn-heart {
    width: 7vh;
    height: auto;
  }
  #button-home {
    display: inline-block;
    margin-inline: 2vh;
    margin-bottom: 0;
  }
  #button-modal {
    display: inline-block;
    margin-inline: 2vh;
    margin-bottom: 0;
  }
}
</style>
