<template>
    <div class="not-found">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <router-link to="/">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: #fff;
    background: linear-gradient(135deg, #1e1e2f, #2a2a40);
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  a {
    font-size: 1.2rem;
    color: #4caf50;
    text-decoration: none;
    border: 2px solid #4caf50;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  a:hover {
    background: #4caf50;
    color: #fff;
  }
  </style>
  