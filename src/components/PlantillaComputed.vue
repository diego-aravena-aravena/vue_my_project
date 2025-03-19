
<!-- uso de computed properties -->
 <!-- Enviar logica en la plantilla con computed -->
  <!-- computed se recalcula solo cuando nombre cambia -->


<template>
  <input v-model="nombre" placeholder="Escribe tu nombre" />
  <p>{{ mensaje }}</p>
</template>

<script setup>
import { ref, computed } from "vue";

const nombre = ref("");

const mensaje = computed(() =>
  (nombre.value ? `hola, ${nombre.value}!` : "Escribe tu nombre")
);
</script>
