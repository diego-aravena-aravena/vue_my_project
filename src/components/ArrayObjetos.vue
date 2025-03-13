<!-- Renderizado de listas v-for -->
 <!-- iterar sobre un array de objetos -->


<template>
    <ul>
        <li v-for="(item, index) in lista" :key="index" >
           {{ item.nombre }}  - {{ item.edad }}  años
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            lista: [
                { nombre: "juan", edad: 25 },
                { nombre: "ana", edad: 30 },
                { nombre: "luis", edad: 22 }
            ]
        };
    }
};
</script>

