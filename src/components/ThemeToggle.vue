<!-- ThemeToggle.vue -->
<template>
  <div @click="toggleTheme" class="theme-toggle">
    <div v-if="isDarkMode">
      <img src="../assets/img/Path.svg" alt="img" />
    </div>
    <div v-else>
      <img src="../assets/img/CombinedShape.svg" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('isDarkMode', this.isDarkMode.toString())

      // You can save the theme preference to local storage or Vuex here
    }
  },
  mounted() {
    // Retrieve theme preference from local storage
    const storedTheme = localStorage.getItem('isDarkMode')
    if (storedTheme) {
      this.isDarkMode = storedTheme === 'true'
    }
  }
}
</script>

<style scoped>
/* ThemeToggle.vue styles */
.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 30px;
}
</style>
