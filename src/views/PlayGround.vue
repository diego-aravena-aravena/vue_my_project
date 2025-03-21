<template>
  <Navbar />
  <div class="container">

    <CardComponent v-for="(card, index) in cards" :key="index" :titulo="card.titulo" :contenido="card.contenido"
      :isWidth="card.isWidth" />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import CardComponent from '../components/CardComponent.vue';
import Navbar from '../components/Navbar.vue';




// Lista de datos para las tarjetas
const cards = ref([
  { titulo: 'Card 1', contenido: 'Contenido de la Card 1',  },
  { titulo: 'Card 2', contenido: 'Contenido de la Card 2' },
  { titulo: 'Card 3', contenido: 'Contenido de la Card 3' },
  { titulo: 'Card 4', contenido: 'contenido de la Card 4' },
  { titulo: 'Card 5', contenido: 'Contenido de la Card 1' },
  { titulo: 'Card 6', contenido: 'Contenido de la Card 2' },
  { titulo: 'Card 7', contenido: 'Contenido de la Card 3', isWidth: true },
  // { titulo: 'Card 8', contenido: 'contenido de la Card 4' },
]);
</script>


<style scoped>
.container {
  margin: 20px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  gap: 40px;
}

.card--green {
  background: #0ddc0d;
}

.card--red {
  background: #f10869;
}
</style>
