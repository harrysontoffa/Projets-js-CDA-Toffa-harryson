<template>
    <div class="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]  gap-70 flex p-3 rounded-sm w-max ">
        <div class="flex gap-3 items-center ">
            <input @click="completeTask" type="checkbox" id="scales" name="scales" checked />
            <p class="w-max">{{ props.task.title }}</p>
            <div class="w-max border self-center px-2 py-0  rounded-sm p-2">{{ props.task.category }}</div>
        </div>
        <button @click="supprimerTask" class="font-semibold text-white rounded-sm bg-red-400 px-2 py-1 self-center ">Supprimer</button>
    </div>
    
</template>

<script setup lang="ts">
import { Task } from '../types/task';

const props = defineProps<{
  task: Task
}>()
const emit = defineEmits(['toggle-complete','delete-task'])


function supprimerTask(){
    emit('delete-task', props.task.idTask)
    

}
function completeTask(){
    emit('toggle-complete', props.task.idTask)
    

}
</script>