
<template>
    <div class="w-300 mx-auto my-auto h-50 bg-whitesmoke-[rgb(246, 255, 255)] shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
        <p class="font-bold  ml-2">Event Building Mode : Composition</p>
        <div class="flex gap-2 justify-center items-center mt-14">
            <button class ="px-2 rounded-sm bg-pink-500" @click="counterStore.decrement" >-</button>
            <P> le nombre est : {{ counterStore.count }} </P>
            <button class="px-2 rounded-sm  bg-blue-300"  @click="counterStore.increment" >+</button>
        </div>
    </div>
     <styleCard />
     <filmList />
     <counterAffiche />
     <Geoloc />
     <TaskItem :task="maTask"/>
     
</template>

<script setup lang="js">
import {useCounterStore} from '../stores/counterStore.js'
const counterStore = useCounterStore()
import styleCard from '../components/styleCard.vue';
import filmList from '../components/filmList.vue';
import counterAffiche from '../components/counterAffiche.vue';
import Geoloc from '../components/Geoloc.vue';


import { ref } from 'vue'
import TaskItem from '../components/TaskItem.vue';
 
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

import { Task } from '../types/task'

const maTask = new Task({
  id: 2,
  title: 'TOFFAA',
  category: 'Travail',
  isCompleted: true
})

</script>