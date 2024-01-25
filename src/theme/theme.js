import { ref } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    // Optionally, you can persist the dark mode preference to localStorage or another storage mechanism
    localStorage.setItem('darkMode', isDarkMode.value.toString());
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}