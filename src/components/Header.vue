<template>
  <header class="container">
    <router-link to="/">
      <img
        alt="Vue logo"
        class="logo"
        id="logo"
        src="@/assets/images/LogoQuatroPatas.svg"
    /></router-link>

    <img
      v-on:click="openMenu"
      src="@/assets/images/menu-nav.png"
      alt="Abrir Menu"
      id="menu-button"
    />

    <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

    <div id="menu-items" :class="{ active: menuActive }">
      <img
        alt="Vue logo"
        class="logo"
        id="menu-logo"
        src="@/assets/images/LogoQuatroPatas.svg"
      />
      <ul>
        <li>
          <router-link to="/rules" id="rules-link">Nossas Regras</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },

  methods: {
    openMenu: function () {
      this.menuActive = true;
    },

    closeMenu: function () {
      this.menuActive = false;
    },
  },
});
</script>

<style scoped>
header {
  background: #d9a9187a;
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  width: 130px;
  margin: 1vh;
  margin-inline: 4vh;
}

#menu-button {
  width: 7vh;
  height: 7vh;
  margin: auto;
  margin-right: 4vh;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
}

#rules-link {
  text-decoration: none;
}

#menu-logo {
  width: 110px;
  margin-top: 3vh;
  margin-bottom: 2vh;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: #000;
}

a {
  font-family: "Amatic Sc";
  font-size: x-large;
}

/* <!---------- Media Query Desktop ---------------> */

@media (min-width: 700px) {
  #logo {
    width: 130px;
    margin: 1vh;
    margin-inline: 19vh;
  }

  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #rules-link {
    text-decoration: none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
    background-color: #e6cf89;
    flex-direction: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-left: 10px;
  }

  header {
    justify-content: flex-start;
  }
}
</style>
