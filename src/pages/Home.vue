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
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  setup() {
    const isSearching = ref(false);

    const handleSearch = () => {
      isSearching.value = true;
    };

    return { isSearching, handleSearch };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os componentes horizontalmente */
  text-align: center;
  padding: 50px 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f3eded;
}

.info {
  margin-top: 20px;
  background: rgba(179, 145, 145, 0.8);
  padding: 15px;
  border-radius: 8px;
  max-width: 500px;
  text-align: center; /* Centraliza o texto */
  display: flex; /* Garante o alinhamento do conteúdo interno */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  font-size: 1rem;
  margin-left: 13px;
}

.info p {
  margin: 0; /* Remove margens padrão */
}

/* Responsividade para dispositivos menores */
@media (max-width: 768px) {
  .home {
    padding: 30px 13px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .info {
    font-size: 0.9rem;
    padding: 10px;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.2rem;
  }

  .info {
    font-size: 0.8rem;
  }
}
</style>

