<template>
   <Navbar/>
  <div class="card-container">
 
    <CardComponent
      v-for="(card, index) in cards"
      :key="index"
      :titulo="card.titulo"
      :contenido="card.contenido"
    />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import CardComponent from '../components/CardComponent.vue';
import Navbar from '../components/Navbar.vue';




// Lista de datos para las tarjetas
const cards = ref([
  { titulo: 'Card 1', contenido: 'Contenido de la Card 1' },
  { titulo: 'Card 2', contenido: 'Contenido de la Card 2' },
  { titulo: 'Card 3', contenido: 'Contenido de la Card 3' },
  { titulo: 'Card 4', contenido: 'contenido de la Card 4' },
  { titulo: 'Card 5', contenido: 'Contenido de la Card 1' },
  { titulo: 'Card 6', contenido: 'Contenido de la Card 2' },
  { titulo: 'Card 7', contenido: 'Contenido de la Card 3' , isWidth: true },
  // { titulo: 'Card 8', contenido: 'contenido de la Card 4' },
]);
</script>


<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  margin: 30px;
  width: 200px;
  display: inline-block;
  text-align: center;
}

.card--green {
  background: #0ddc0d;
}

.card--red {
  background: #f10869;
}
</style>

