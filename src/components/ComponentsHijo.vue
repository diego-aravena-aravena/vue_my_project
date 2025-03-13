
<!-- Componentes con props y eventos  -->
<!-- Componentes hijo  -->

<template>
    <button @click="$emit('saludar', 'hola desde el hijo')">saludar</button>
</template>