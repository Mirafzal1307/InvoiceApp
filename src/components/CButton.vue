<!-- eslint-disable vue/multi-word-component-names -->
<!-- Button.vue -->
<template>
  <button
    class="flex items-center gap-2 px-4 py-2 rounded-full text-sm focus:scale-110 transition-transform"
    :style="{ backgroundColor: bgColor, color: textColor }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  textColor: {
    type: String
  },
  bgColor: {
    type: String
  },
  text: {
    type: String,
    default: 'Button'
  },
  disabled: {
    type: Boolean,
    default: false
  },

  loading: {
    type: String,
    default: false
  }
})
</script>
