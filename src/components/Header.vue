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
  flex-wrap: wrap;  /* Permite que os elementos se reordenem quando necessário */
}

header h1 {
  width: 100%; /* Garante que o título ocupe a largura inteira em dispositivos menores */
  text-align: center; /* Alinha o título no centro */
}

button {
  margin-top: 10px; /* Espaço entre o título e o botão */
  width: 100%; /* Faz o botão ocupar toda a largura disponível em telas menores */
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  background-color: var(--button-color);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--button-hover-color); /* Muda a cor ao passar o mouse */
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  header {
    flex-direction: column; /* Alinha os itens verticalmente em telas pequenas */
    align-items: center;    /* Centraliza os itens na tela */
    text-align: center;     /* Garante que o texto do título também fique centralizado */
  }
}
</style>
