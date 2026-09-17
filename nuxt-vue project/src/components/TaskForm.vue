<template>
    <div class="flex flex-col  p-2 mb-4 rounded-sm mx-auto my-auto shadow-[0_0_10px_rgba(5,1,1,0.1)] w-max gap-5">
        <h1 class="font-bold">Nouvelle Tâche</h1>
        <div class="flex w-max gap-4 ">
            <input v-model="titre" type="text" class="p-3 border border-gray-500 rounded-sm" placeholder="Titre de la tache...">

            <select v-model="category" class="border px-1 rounded-sm" name="cars" id="cars">
                    <option value="Travail">Travail</option>
                    <option value="Personnel">Personnel</option>
                    <option value="Urgent">Urgent</option>
                    
            </select>
            <button @click="soumettre" class="font-semibold px-3 cursor-pointer rounded-sm bg-blue-500 text-white">Ajouter</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref  } from 'vue'
const titre = ref('')
const category = ref('')

const emit = defineEmits(['add-task'])

// fonction soumettre se déclenche au click du boutton, ce qui declenche le emit add-task qui envoi au parent titre.value, category.value
function soumettre(){
    if(titre.value !== ''){
            emit('add-task', titre.value, category.value)
            // rénitialisation du contenu de titre et category
            titre.value = ''
            category.value= ''
    }
    else{
        return
    }

}


</script>