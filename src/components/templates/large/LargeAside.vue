<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>
<template>
  <header class="header">
  <nav>
    <div class="logo">
      <img style="width: 80px;" src="../../../assets/images/logo.jpg" alt="">
    </div>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="/Contato">Contato</a></li>
      <router-link class="btn outline" to="/addocorrencia" >Adicionar Ocorrência</router-link>
    </ul>
  </nav>
</header>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
  list-style: none;
}

.header {
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  background-color: #ffffff;
  z-index: 1;
  border-bottom: solid 2px #636161;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.logo a span {
  color: #8739fa;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu a {
  display: block;
  padding: 7px 15px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all ease-in-out;
  color: #000000;
}

.menu:hover a {
  opacity: 0.4;
}

.menu a:hover {
  opacity: 1;
  color: #8739fa;
}

.menu-icon {
  display: none;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked ~ .menu {
  transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {
  .menu {
    flex-direction: column;
    background-color: #151418;
    align-items: start;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .menu a {
    margin-left: 12px;
  }

  .menu li {
    margin-bottom: 10px;
  }

  .menu-icon {
    display: block;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
}

</style>
