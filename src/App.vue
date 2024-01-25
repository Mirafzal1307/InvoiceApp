<template>
  <div class="flex bg-bgLight flex-1 dark:bg-bgDark flex-col w-screen h-screen sm:flex-row">
    <component class="flex bg-bgLight flex-1 dark:bg-bgDark flex-col w-screen h-screen sm:flex-row" :is="getComponentsName($route.meta.title)">
      <RouterView> </RouterView>
    </component>
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router'

const getComponentsName = (title) => {
  const components = {
    HomeView: 'HomeView'
  }
  return components[title] || ''
};
</script>
