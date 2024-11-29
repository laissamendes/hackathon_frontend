<script setup>
  import { ref, reactive } from 'vue';
  const titulo = ref('Formulário de Cadastro de Produtos');
</script>

<template>

  <h1>{{ titulo }}</h1>

  <div class="altera-titulo">
    <h2>Informe um novo título:</h2>
    <input type="text" v-model="titulo" />
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
