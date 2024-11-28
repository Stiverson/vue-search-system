<script setup>
defineProps(['theme']);
defineEmits(['toggle-theme']);
</script>

<template>
  <header>
    <h1>Search System</h1>
    <button @click="$emit('toggle-theme')">
      {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--text-color);
}
</style>
