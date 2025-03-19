<template>
  <div>
    <h2>Playground de Tarjetas</h2>

    <div class="cards-container">
      <CardComponent
        v-for="(card, index) in cards"
        :key="index"
        :titulo="card.titulo"
        :contenido="card.contenido"
      />
    </div>
  </div>

  <div class="cards2-container" :style="{ gridTemplateColumns: template }">
    <CardComponent
      v-for="(card, index) in cards2"
      :key="index"
      :titulo="card.titulo"
      :contenido="card.contenido"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CardComponent from "../components/CardComponent.vue";

const cards = ref([
  { titulo: "Proyecto Vue", contenido: "Aprendiendo Vue.js con Composition API" },
  { titulo: "Pinia Store", contenido: "Manejo de estado global con Pinia" },
  { titulo: "Vue Router", contenido: "Navegación entre páginas con Vue Router" },
  { titulo: "Composición de Componentes", contenido: "Organizando la UI con Vue" }
]);

const cards2 = ref([
  { titulo: "Card 1", contenido: "Ocupa 33.33%" },
  { titulo: "Card 2", contenido: "Ocupa 33.33%" },
  { titulo: "Card 3", contenido: "Ocupa 33.33%" },
  { titulo: "Card 4", contenido: "Ocupa 50%" }
]);

// Template dinámico basado en el número de tarjetas
const template = computed(() => {
  if (cards2.value.length === 3) {
    return "33.33% 33.33% 33.33%"; // Las tres primeras ocupan 33.33%
  } else if (cards2.value.length === 4) {
    return "33.33% 33.33% 33.33% 33.33%"; // La cuarta ocupa 50%
  } 
});


</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background: red;
}

.cards2-container {
  width: 100%;
  display: grid;
  gap: 10px;
  background: blue;
}
</style>
