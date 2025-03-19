
<template>
    <input v-model="usuarioId"  type="number"  placeholder="ID del usuario"/>
    <p>{{ usuario }}</p>
</template>

<script setup>

import { ref, watch} from "vue";
import axios from "axios";

const usuarioId = ref(1);
const usuario = ref("");

watch(usuarioId, async (nuevoId) => {
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/user/${nuevoId}`);
    usuario.value = respuesta.data.name;
});
</script>