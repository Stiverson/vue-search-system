<template>
  <div>
    <header>
      <h1>Bem-vindo ao Sistema de itens de Apis</h1>
    </header>

    <div class="toggle-container">
      <!-- Toggle button -->
      <button class="toggle-button" @click="toggleTheme"></button>
      <!-- Legenda do tema -->
      <span class="toggle-label">{{ theme === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light", // Tema inicial
    };
  },
  watch: {
    theme(newTheme) {
      document.body.className = ""; // Remove as classes antigas
      document.body.classList.add(newTheme); // Adiciona a classe atual (light ou dark)
    },
  },
  mounted() {
    document.body.className = this.theme; // Aplica o tema inicial
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light"; // Alterna entre 'light' e 'dark'
    },
  },
};
</script>
