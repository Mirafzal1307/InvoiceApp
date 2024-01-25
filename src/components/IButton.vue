<!-- eslint-disable vue/multi-word-component-names -->
<!-- Button.vue -->
<template>
  <button class="btn flex items-center gap-2 bg-[#c4f0e2] px-4 py-2 rounded-md text-[#3cd1a1] text-sm" :class="getBtnClass"  :disabled="disabled">
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
  variant: {
    type: String,
    default: 'primary' // secondary
  },
  loading: {
    type: String,
    default: false
  }
})

const getBtnClass = computed(() => {
  if (props.variant === 'primary') {
    return 'btn-primary'
  } else if (props.variant === 'secondary') {
    return 'btn-secondary'
  }
})
</script>

