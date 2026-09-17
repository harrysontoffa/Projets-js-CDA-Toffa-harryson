<template>
    <div class="flex flex-col p-5 mx-auto my-auto w-max bg-white border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-sm mb-5 justify-center items-center">
        <h1 class="font-bold">Géolocalisation Navigateur API + VueUse</h1>
        <div class="flex gap-4">
            <p > <span class="font-bold">longitude</span>: {{ coords.longitude }}</p>
            <p ><span class="font-bold">latitude</span> : {{ coords.latitude }}</p>
            <p><span class="font-bold">Précission</span> : {{ coords.accuracy }} mètres</p>
        </div>
        <button @click="geolocaliser" class="w-max bg-pink-300  text-white font-semibold rounded-sm px-2 py-2" >Voir sur Google Maps 🗺️</button>

    </div>
    
</template>

<script setup lang="js">
import { useGeolocation } from '@vueuse/core'


const { coords, locatedAt, error, resume, pause } = useGeolocation()

function geolocaliser(){
    if(coords.value.longitude === Infinity || coords.value.latitude === Infinity){
        return 
    }
    {
          const url = `https://www.google.com/maps?q=${coords.value.latitude},${coords.value.longitude}`
          window.open(url ,'_blank')

    }
}



</script>