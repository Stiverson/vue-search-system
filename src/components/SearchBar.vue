<script setup>
import { ref } from 'vue';
defineEmits(['search']);

const query = ref('');
const responseData = ref(null);
const loading = ref(false);
const error = ref('');

const handleSearch = async () => {
  if (!query.value) return;

  loading.value = true;
  error.value = '';
  responseData.value = null;

  try {
    // Aqui você vai substituir pela API que você deseja usar
    const apiUrl = query.value;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Erro ao acessar a API');
    }

    // Aqui você vai manipular os dados que a API retorna
    const data = await response.json();
    responseData.value = data;
  } catch (err) {
    error.value = err.message || 'Erro desconhecido';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="search-bar-container">
    <input
      v-model="query"
      class="search-input"
      placeholder="Cole o link da api aqui..."
    />
    <button class="search-button" @click="handleSearch">Buscar Informações</button>
  </div>

  <div v-if="loading" class="loading">Carregando...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <!-- Exibe os dados da resposta da API -->
  <div v-if="responseData" class="response-data">
    <pre>{{ responseData }}</pre>
  </div>
</template>

<style scoped>
.search-bar-container {
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center;     /* Alinha os itens verticalmente */
  gap: 1rem;               /* Espaço entre o input e o botão */
  padding: 1rem;
  width: 100%;
  max-width: 800px;         /* Limita a largura máxima para manter o design responsivo */
  margin: 0 auto;          /* Centraliza o contêiner na tela */
}

.search-input {
  width: 100%;
  max-width: 500px;         /* Aumenta a largura do campo de busca */
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #ccc;
  box-sizing: border-box;
}

.search-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #45a049; /* Cor mais escura ao passar o mouse */
}

.loading {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #666;
}

.error {
  margin-top: 20px;
  font-size: 1.2rem;
  color: red;
}

.response-data {
  margin-top: 20px;
  max-width: 800px;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  background: #2659a5;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 400px; /* Limita a altura máxima para a área de resposta */
  overflow-y: auto;  /* Adiciona barra de rolagem caso o conteúdo seja maior que o limite */
  font-size: medium;
  color: rgb(3, 4, 15);
}

@media (max-width: 768px) {
  .search-input {
    max-width: 350px; /* Reduz a largura em dispositivos menores */
  }
}
</style>
