<template>
    <div class="flex  gap-3">
        <button @click="scrollToTop" class="w-max h-max  font-bold cursor-pointer  ">⬆️</button>
        <p> y: {{ y }}</p>
        
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y} = useWindowScroll()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}






</script>