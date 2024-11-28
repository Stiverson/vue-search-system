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
  flex-wrap: wrap;         /* Permite que os itens quebrem linha em telas menores */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center;     /* Alinha os itens verticalmente */
  gap: 1rem;               /* Espaço entre o input e o botão */
  padding: 1rem;
  width: 100%;
  max-width: 800px;        /* Limita a largura máxima */
  margin: 0 auto;          /* Centraliza o contêiner na tela */
}

.search-input {
  flex: 1;                 /* Faz o input ocupar o máximo de espaço possível */
  min-width: 200px;        /* Define uma largura mínima */
  max-width: 500px;        /* Define uma largura máxima */
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #030303;
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
  min-width: 120px;        /* Define uma largura mínima para o botão */
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

/* Estilo para telas menores (dispositivos móveis) */
@media (max-width: 768px) {
  .search-bar-container {
    flex-direction: column; /* Alinha os itens verticalmente em telas menores */
    gap: 0.8rem;            /* Reduz o espaçamento entre os itens */
  }

  .search-input {
    max-width: 100%;        /* O input ocupa toda a largura disponível */
    min-width: 100%;        /* O input preenche o container */
  }

  .search-button {
    width: 100%;            /* O botão ocupa toda a largura em telas menores */
    padding: 0.8rem;        /* Ajusta o padding para melhor proporção */
  }

  .response-data {
    max-width: 100%;        /* Garante que a área de resposta se ajuste à largura da tela */
    font-size: 0.9rem;      /* Reduz um pouco o tamanho da fonte para telas menores */
  }
}

</style>
