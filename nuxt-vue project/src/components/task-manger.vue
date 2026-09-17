<template>
    <TaskForm />
    <TaskItem v-for="(tache, index)  in tasks" :key="index" :task="tache1"/>



</template>
<script setup lang="ts">
 import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';
import  {Task } from '../types/task'
import { ref } from 'vue'
import type { Ref } from 'vue';


const tasks: Ref<Task[]> = ref([...])

const tache1 =  tasks.value.push({title:'exo', idTask:1, category:'Travail', isCompleted:false})


</script>
