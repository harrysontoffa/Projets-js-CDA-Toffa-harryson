<template>
  <AppHeader />
  <!-- router-view affiche la page correspondante à la route active -->
  <router-view></router-view>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style scoped lang="css">
</style>