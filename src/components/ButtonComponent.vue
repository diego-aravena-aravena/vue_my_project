<!-- Este botón cambia de color y emite un evento al hacer clic. -->


<template>
    <button :class="`btn btn-${color}`" @click="emitirEvento">
{{ label }}
    </button>
</template>


<script setup> 
import { defineProps, defineEmits } from 'vue';

defineProps({
    label: String,
    color:{
        trpe: String,
        default: "primary"
    }
});
const emit = defineEmits (["clickeado"]);

const emitirEvento = () => {
emit("clickeado");    
};
</script>


<style scoped>
.btn{
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.btn-primary{
    background: blue;
    color: white;
}
.btn-danger{
    background: red;
    color: white;
}

</style>