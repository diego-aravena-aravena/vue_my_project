<template>

<div class="card">
    <h3>{{ titulo }}</h3>
    <p>{{ contenido }}</p>


</div>
</template>

<script setup>
defineProps({
    titulo: String,
    contenido: String,

});


</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    background: #201f1f;
    margin: 10px;
    width: 200px;
    display: inline-block;
    text-align: center;
}
button{
    background: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
}

</style>