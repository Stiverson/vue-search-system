<template>
  <div class="home">
    <h1>Explore e Pesquise com Facilidade</h1>
    <SearchBar @search="handleSearch" />
    <div class="info" v-if="!isSearching">
      <p>
        Este sistema permite pesquisar registros de forma rápida e prática.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  setup() {
    // Variável para controlar o estado da pesquisa
    const isSearching = ref(false);

    // Função chamada ao iniciar a pesquisa
    const handleSearch = () => {
      isSearching.value = true;
    };

    return { isSearching, handleSearch };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
}

.info {
  margin-top: 20px;
  background: rgba(179, 145, 145, 0.8);
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
}

@media (max-width: 768px) {
  .info {
    font-size: 0.9rem;
  }
}
</style>
