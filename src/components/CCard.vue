<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex dark:bg-dark1 justify-between items-center gap-5 p-5 cursor-pointer w-full hover:shadow-primary dark:border-dark1 dark:text-white rounded-md bg-white"
  >
    <div class="flex justify-around w-full">
      <p class="font-bold text-black text-base dark:text-white">
        <span class="text-light3">#</span>XM9141
      </p>
      <p class=" font-medium text-sm text-light2">Due 20 Sep 2021</p>
      <h3 class="font-medium text-sm text-light2">Alex Grim</h3>
    </div>
    <div class="flex justify-end gap-8 w-full items-center">
      <p class="font-bold text-black text-base dark:text-white">£ 556.00</p>

      <CBadge :bg-color="'rgba(51, 214, 159, 0.15)'"  :text-color="'#33D69F'">
        <Icon class="w-2 h-2" icon="bi:circle-fill" /> paid
      </CBadge>
      <span class="text-purple-700 font-bold"><Icon icon="bi:chevron-right" /> </span>
    </div>
  </div>
</template>
name: 'OcticonDotFill16',

<script setup>
import CButton from './CButton.vue'
import { Icon } from '@iconify/vue'
import CBadge from './CBadge.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  data: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>
