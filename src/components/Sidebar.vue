<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <span class="logo">
      <img src="../assets/img/Group 9.png" alt="img" />
    </span>
    <div class="sidebar-icons">
      <span>
        <ThemeToggle />
      </span>

      <span><img class="avatar" src="../assets/img/Oval.svg" alt="img" /></span>
    </div>
  </div>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<style scoped>
.sidebar {
  background-color: #373b53;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
}
.sidebar-icons span img {
  margin: auto;
  padding: 30px;
}
.avatar {
  border-top: #494e6e solid 1px;
}
</style>
