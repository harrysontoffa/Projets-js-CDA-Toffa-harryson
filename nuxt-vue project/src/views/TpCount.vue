
<template>
    <div class="w-300 mx-auto my-auto h-50 bg-whitesmoke-[rgb(246, 255, 255)] shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <p class="font-bold  ml-2">Event Building Mode : Composition</p>
        <div class="flex gap-2 justify-center items-center mt-14">
            <button class ="px-2 rounded-sm bg-pink-500" @click="reduire" >-</button>
            <P> le nombre est : {{ nbr }} </P>
            <button class="px-2 rounded-sm  bg-blue-300"  @click="ajouter" >+</button>
        </div>
    </div>
     <styleCard />
     <filmList />
     
</template>

<script setup lang="js">
import styleCard from '../components/styleCard.vue';
import filmList from '../components/filmList.vue';

import { ref } from 'vue'
 
const nbrSauvegarder = localStorage.getItem('nombre')

const nbr = ref(nbrSauvegarder ?  Number(nbrSauvegarder) : 0)

function ajouter() {
    nbr.value = nbr.value + 1

    localStorage.setItem('nombre', nbr.value)

   
}
function reduire() {
    nbr.value = nbr.value - 1

    localStorage.setItem('nombre', nbr.value)

   
}

</script>