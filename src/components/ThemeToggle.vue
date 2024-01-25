<!-- eslint-disable vue/valid-define-emits -->
<!-- DarkModeToggle.vue -->
<script setup>
import { defineEmits } from 'vue'

const { isDarkMode } = defineProps(['isDarkMode'])
const emit = defineEmits()

const toggleDarkMode = () => {
  emit('toggle')
};
</script>
<template>
  <button @click="toggleDarkMode" class="m-auto flex justify-center pb-6" >
    <span v-if="isDarkMode">
      <img
        src="../assets/img/CombinedShape.svg"
        alt="img"
        class="fa-regular fa-moon text-[20px] text-light3 hover:text-light1 duration-200 w-6 h-6"
      />
    </span>
    <span v-else>
      
      <img src="../assets/img/Path.svg" class="fa-regular fa-moon text-[20px] text-light3 hover:text-light1 duration-200 w-6 h-6" />
    </span>
  </button>
</template>
i
