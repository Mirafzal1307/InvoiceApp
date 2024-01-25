<!-- eslint-disable vue/multi-word-component-names -->
<!-- Button.vue -->
<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style>
/* Add your button styles here */
.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #c4f0e2;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 15px;
  color: #33D69F;
}

/* Add more button styles for different types if needed */
</style>
