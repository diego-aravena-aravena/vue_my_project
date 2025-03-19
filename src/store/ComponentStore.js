// Esto permite agregar más componentes dinámicamente.

import { defineStore } from "pinia";

import { ref }  from "vue";

export const useComponentStore = defineStore("ComponestStore", () => {
    const componentes = ref ([
        {name: "boton", component: "ButtonComponents" },
        {name: "Tarjeta", component: "CardComponents" }
    ]);
    return { componentes };
})