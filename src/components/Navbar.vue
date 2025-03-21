<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MiApp</a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in menuItems" :key="item.text">
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';


  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const menuItems = ref([
    { text: 'Inicio', link: '#' },
    { text: 'Servicios', link: '#' },
    { text: 'Contacto', link: '#' },
  ]);
  </script>
  
  <style scoped>
  nav {
    width: 100%; /* Hace que la navbar ocupe todo el ancho */
    padding: 16px; /* Espaciado interno */
  }
  
  .container {
    max-width: 1200px; /* Evita que el contenido sea demasiado ancho */
    margin: 0 auto; /* Centra el contenido */
  }
  </style>
  