<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const texto = ref("cambio")

const holaMundo = (params) => {
  console.log(params);
}

function Cambiartexto(cambio) {
  texto.value = cambio;
}



</script>

<template>

  <h1>{{ texto }}</h1>

  <!-- <div class="card">
    <button type="button" @click="count++">pelotudo de ms es {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->

  <div>
    <button type="button" @click="Cambiartexto('saludos')">saludos
    </button>
    <button type="button" @click="Cambiartexto('cordiales')">cordiales
    </button>
    <button type="button" @click="Cambiartexto('pepipo')">pepipo
    </button>
    <button type="button" @click="Cambiartexto('ct.....')">hola
    </button>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
