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
    /* margin: 30px; */
    width: 250px;
    display: inline-block;
    text-align: center;
    height: 150px;
  }

  .cardWidth {
    width: 530px !important;
    background-color: #ddd;
  }
  </style>
  