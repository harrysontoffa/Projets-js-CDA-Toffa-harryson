<template>
    <div class="flex flex-col p-5 mx-auto my-auto w-max bg-white border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-sm mb-5 justify-center items-center">
        <h1 class="text-blue-500 ">Compteur avec Pinia</h1>
        <p>Gérez un compteur avec l'état global fourni par pinia</p>
        <p>{{ counterStore.count }}</p>
       <div class="flex  w-max gap-5">
            <button @click="counterStore.increment" class="bg-blue-600 text-white font-semibold rounded-sm w-max px-3 py-1">Incrémenter</button>
            <button @click="counterStore.decrement" class="bg-white text-black font-semibold rounded-sm w-max border border-gray-200 px-3 py-1">Décrémenter</button>
            <button @click="counterStore.reset" class="bg-pink-600 text-white font-semibold rounded-sm w-max px-3 py-1">Réinitialiser</button>
       </div>
    </div>

</template>


<script setup lang="js">

import {useCounterStore} from '../stores/counterStore.js'
const counterStore = useCounterStore()

const idlivre = "db06b5ff-e281-4f44-864e-3413288da5d3"

</script>