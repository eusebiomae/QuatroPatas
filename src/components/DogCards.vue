<template>
  <div id="dogCards" class="dogCard">
    <div class="dogCard-inner">
      <div class="dogCard-image-wrap">
        <img :src="dogCard.src" class="image" />
      </div>
      <div class="dogCard-detail">
        <h2>{{ dogCard.title }}</h2>
        <p>{{ dogCard.desc }}</p>
      </div>
      <div id="button-home">
        <router-link to="/heart"
          ><img
            id="btn-heart"
            src="@/assets/images/heart2.png"
            alt="Home Btn"
            class="btn"
        /></router-link>
      </div>
      <div id="button-home">
        <router-link to="/adopt"
          ><img
            id="btn-adote"
            src="@/assets/images/Adote.png"
            alt="Home Btn"
            class="btn"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DogCards",
  props: ["dogCard"],
});
</script>

<style scoped>
/* <!----------------------- Media Query --------------------> */
.dogCard {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 15px;
  /* margin-inline: 25px; */
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
  margin-inline: 1vh;
  margin: 3vh;
  margin-bottom: 0;
}
</style>
