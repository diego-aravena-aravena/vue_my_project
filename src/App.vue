<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MostrarOcultarElementos from './components/MostrarOcultarElementos.vue';
import ArrayObjetos from './components/ArrayObjetos.vue';
import ContadorClick from './components/ContadorClick.vue';
import Formulario from './components/Formulario.vue';
import ComponentsPadre from './components/ComponentsPadre.vue';
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <MostrarOcultarElementos/>
  <ArrayObjetos/>
  <ContadorClick/>
  <br>
  <Formulario/>

  <ComponentsPadre/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
