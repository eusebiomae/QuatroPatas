<template>
  <footer class="footer">
    <router-link to="/"
      ><img
        alt="Vue logo"
        class="logo-footer"
        id="logo-footer"
        src="@/assets/images/LogoQuatroPatas.svg"
    /></router-link>
    <div id="text-footer">
      <p><b>Quatro Patas Adoção de Animais</b></p>
      <p>
        <a
          href="http://maps.google.com/maps?q=158+R.+das+Oliveiras,+Iguatemi,+São+Paulo"
          id="address-link"
          target="blank"
          >Rua das Oliveiras, 158 | Nova Floresta - São Paulo, SP 13999-008
        </a>
      </p>
      <p>
        <a href="tel:+021-9921-8282" class="" id="phone-link-q"
          >(021) 9921-8282</a
        >
        ou
        <a href="tel:+019-9923-5050" class="" id="phone-link-q"
          >(019) 9923-5050</a
        >
      </p>
      <br />
    </div>
  </footer>
  <footer id="subfooter" class="footer">
    <ul>
      <li>Copyright 2022. Todos os direitos reservados</li>
    </ul>
    <ul>
      <li>
        Violência contra animais é crime. Denuncie
        <a href="tel:0800-600-6428" class="" id="phone-link">0800 600 6428</a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 460px;
  background: #d9a9187a;
  position: absolute;
  display: block;
  left: 0;
  /* justify-content: flex-start; */
  /* align-items: center; */
}

#logo-footer {
  width: 30vh;
  margin-inline: 12vh;
  margin-top: 7vh;
}
#text-footer {
  margin: 2vh;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

#subfooter {
  width: 100%;
  height: 135px;
  background: #6c3659;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  /* flex-direction: none; */
  /* justify-content: flex-start; */
}

ul {
  list-style: none;
  margin-right: 5vh;
  margin-top: 2vh;
}

ul li {
  text-align: center;
  margin-right: 1vh;
}

ul li {
  color: #fff;
}
#phone-link {
  text-decoration: none;
  color: #fff;
}
#phone-link:hover {
  color: #9b5cda;
}
#phone-link-q {
  text-decoration: none;
  color: #000;
}
#phone-link-q:hover {
  color: #8e41dc;
}

#address-link {
  text-decoration: none;
  color: #000;
}
#address-link:hover {
  color: #9b5cda;
}

/* <!------------ Media Query ------------------> */

@media (min-width: 700px) {
  footer {
    width: 100%;
    height: 210px;
    background: #d9a9187a;
    position: absolute;
    display: flex;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #logo-footer {
    width: 30vh;
    margin-bottom: 10vh;
    margin-inline: 23vh;
  }
  #text-footer {
    margin: 15vh;
    margin-left: 38vh;
    text-align: left;
  }

  #subfooter {
    width: 100%;
    height: 35px;
    background: #6c3659;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: none;
    justify-content: flex-start;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20vh;
    margin-top: 0;
  }
  #phone-link {
    text-decoration: none;
    color: #fff;
  }
  #phone-link:hover {
    color: #9b5cda;
  }
  #phone-link-q {
    text-decoration: none;
    color: #000;
  }
  #phone-link-q:hover {
    color: #8e41dc;
  }
}
</style>
