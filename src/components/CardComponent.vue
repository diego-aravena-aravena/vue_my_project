<template>
    <div class="card" :class="{'cardWidth': isWidth}">
      <h3>{{ titulo }}</h3>
      <p>{{ contenido }}</p>
    </div>

  </template>

<script setup>
defineProps({
  titulo: String,
  contenido: String,
  isWidth: Boolean,

});
</script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background: #0ddc0d;
    margin: 30px;
    width: 200px;
    display: inline-block;
    text-align: center;
  }

  .cardWidth {
    width: 400px;
  }
  </style>
  