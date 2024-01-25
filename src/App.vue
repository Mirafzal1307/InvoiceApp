<template>
  <div class="app" :class="{ 'dark-theme': isDarkMode }">
    <Sidebar />
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<style>
body {
  background-color: #f8f8fb;
  color: #000;
}

.dark-theme {
  background-color: rgb(5, 208, 8);
  color: #ffffff;
}
</style>
