<template>
    <div class="flex flex-col w-max mb-6 mx-auto gap-4 my-auto h-max px-10 py-10 border rounded-sm ">
        <div class="flex   mx-auto my-auto"><h1 class="font-bold">🎬 WatchList (Films à voir)</h1></div>
        <div class="flex flex-col gap-3">
            <P class="text-xs text-gray-600">Nom du Film:</P>
            <input  v-model="filmInput" id="input" type="text" class="border py-2 rounded-sm w-300 ">
            
        </div>
            <button @click="ajouterBtn" id="ajouterBtn" class="px-100 bg-purple-500 cursor-pointer py-2 rounded-sm text-white font-bold">Ajouter à votre liste</button>
            <ul class="flex flex-col gap-4" v-if="listFilms.length > 0">
                <li @click="deleteFilm(index)"  class=" py-2 w-max cursor-pointer rounded-sm  px-4 bg-gray-200 " v-for="(film, index) in listFilms" :key="index">
                    {{ film }} 🗑️
                </li>
            </ul>
            <p v-else>Pas encore de films dans votre liste ? veuillez en ajouter un</p>
            <!-- <p v-if="listFilms.length > 0" class="font-bold">Votre Film : {{ listFilms }} </p> <p v-else>Pas encore de films dans votre liste ? veuillez en ajouter un</p> -->
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
    const listFilms = ref([])
    // const inputZ = document.getElementById('input')
     const filmInput = ref('')

  function ajouterBtn(){
     if (filmInput.value.trim() !== ''){
        let Film = filmInput.value
        listFilms.value.push(Film)
        filmInput.value=''
     }
     
  }
  function deleteFilm(index){
    if(listFilms.value)
      listFilms.value.splice(index, 1)
  }
    
   

</script>