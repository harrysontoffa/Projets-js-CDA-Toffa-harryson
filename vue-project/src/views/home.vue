
<template>
    <div class="w-300  mx-auto my-auto h-max bg-whitesmoke-[rgb(246, 255, 255)] mb-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <p class="font-bold  ml-2">Event Building Mode : Composition</p>
        <div class="flex gap-2 justify-center items-center mt-14">
            <button class ="px-2 rounded-sm bg-pink-500" @click="ajouter1" >+1</button>
            <P> le nombre est : {{ nbr }}  ?</P>
            <button class="px-2 rounded-sm  bg-blue-300"  @click="ajouter5" >+5</button>
        </div>

        <p class="mx-auto my-auto w-max p-2">{{ indice }}</p>

        <p v-if="msg" class="mx-auto my-auto text-pink-500 w-max p-2">{{ msg }}</p>
    </div>
    
     
</template>

<script setup lang="js">



import { ref, computed, watch } from 'vue'
 


const nbr = ref(0)
const msg  = ref('')

function ajouter5() {
    nbr.value = nbr.value + 5
    // if (nbr.value >= 30) {   
    // }  
}

function ajouter1() {
    nbr.value = nbr.value + 1
//    if (nbr.value >= 30) {    
//     }   
}

const indice = computed(() => {
   if (nbr.value < 7) return "ESSAIE ENCORE 😶!"
    if (nbr.value === 7) return "7... BINGO😁👌"
    return "Tu as dépassé le nombre😶‍🌫️  !"
})
watch(nbr, (nouvelleValeur) => {
    if (nouvelleValeur >= 30) {
        msg.value = "BCP BCP mais alors bcp TROP😶‍🌫️😶"
        setTimeout(() => {
            nbr.value = 0
            msg.value = ''
        }, 3000)
    }
})
</script>