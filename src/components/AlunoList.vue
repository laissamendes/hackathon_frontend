<script setup>
import { onMounted } from 'vue';
import { useAlunoStore } from '@/stores/aluno';


const alunoStore = useAlunoStore();

async function getAluno() {
  await alunoStore.getAluno();
}

onMounted(async () => {
  await getAluno();
});
</script>

<template>
  <div class="aluno-list">
<h1>aaaaaa</h1>
    <div
      v-for="aluno in alunoStore.alunos"
      :key="aluno.id"
      class="aluno-card"
    >
      <div class="aluno-img-wrapper">

        <i class="mdi mdi-heart-outline" />
      </div>
      <div class="aluno-title-price">


      </div>
      <div class="aluno-description-stars">

        <p>NOME:{{ (aluno.nome) }}</p>


      </div>
    </div>
  </div>
</template>

<style scoped>
.aluno-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
}

.aluno-card {
  width: 225px;
  font-family: 'Belleza', sans-serif;
}

.aluno-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.5rem;
  padding-top: 20px;
  margin-bottom: 1rem;
  background-color: #eeeeee;
  height: 201px;
}

.aluno-img-wrapper img {
  width: 153px;
  height: 170px;
  object-fit: cover;
}

.aluno-title-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.aluno-title-price p {
  font-weight: bold;
  font-size: 16px;
  color: #010101;
}

.aluno-description-stars {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.aluno-description-stars p {
  font-size: 12px;
  color: #535050;
}
</style>
