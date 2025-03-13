<!-- Formulario con v-model -->
<!-- Captura datos en tiempo real -->

<template>
<input v-model="nombre" placeholder="Escribe tu nombre"/>
<p>hola, {{ nombre }}!</p>
</template>

<script>
export default{
    data(){
        return{
            nombre: ""
        };
    }
};
</script>