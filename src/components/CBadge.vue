<template>
  <div>
    <span
      :style="{ backgroundColor: bgColor, color: textColor ,  }"
      class="px-6 py-2 flex justify-around items-center gap-2 rounded-md font-bold capitalize   "
    >
      <slot> </slot>
    </span>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  textColor: {
    type: String
  },
  bgColor: {
    type: String
  },

})
</script>
