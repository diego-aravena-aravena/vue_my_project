<!-- Componentes con props y eventos  -->
<!-- Componente padre  -->

<template>
  
  <ComponentsHijo @saludar="mostrarMensaje"/>

  <p>{{ mensaje }}</p>
</template>


<script>
import ComponentsHijo from './ComponentsHijo.vue';


export default{
    components:{ComponentsHijo},
    data(){
        return{
            mensaje: ""
        };
    },
    methods:{
        mostrarMensaje(msj){
            this.mensaje = msj;
        }
    }
};
</script>
