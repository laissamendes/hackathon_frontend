<script setup>
  import { ref, } from 'vue';
  const titulo = ref('Formulário de Cadastro de Produtos');

import { onMounted } from 'vue';
import { useOcorrenciaStore } from '@/stores/ocorrencia.js';

// import { formatDescription, formatPrice, formatTitle } from '@/helpers/format';

const ocorrenciaStore = useOcorrenciaStore();
const ocorrencia = ref(null);


async function getOcorrencia() {
  await ocorrenciaStore.getOcorrencia();
}

onMounted(async () => {
  await getOcorrencia();
});
</script>

<template>

  <h1>{{ titulo }}</h1>

  <div class="altera-titulo">
    <h2>Informe um novo título:</h2>
    <p>{{ ocorrencia.descricao }}</p>
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
