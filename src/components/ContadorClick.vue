<!-- Manejo de eventos v-on / @click -->
<!-- Contador con @click -->

<template>
    <button @click="contador++">Aumentar: {{ contador }}</button>
</template>

<script>
export default{
    data(){
        return{
            contador:0
        };
    }
};
</script>