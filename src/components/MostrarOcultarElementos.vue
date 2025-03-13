<template>
    <button @click="mostrar = !mostrar">aparece y desaparece </button>
    <p v-if="mostrar" >este texto aparece y desaparece con v-if</p>
    <p v-show="mostrar" >este texto aparece y desaparece con v-show</p>
</template>


<script>
export default{
    data(){
        return{
            mostrar: true
        };
    }
};
</script>