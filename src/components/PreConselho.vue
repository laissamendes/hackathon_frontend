<script setup>
import { onMounted, ref } from 'vue'
import { useTurmaStore } from '@/stores/turma'
import { usePreConselhoStore } from '@/stores/preConselho.js'

const turmaStore = useTurmaStore()
const preConselhoStore = usePreConselhoStore()

const trimestre = ref([
  { id: 1, description: "1° trimestre" },
  { id: 2, description: "2° trimestre" },
  { id: 3, description: "3° trimestre" },
])

const preConselho = ref({
  turma: '',
})

async function registrarPreConselho() {
  await preConselhoStore.adicionarPreConselho(preConselho.value)
}

onMounted(async () => {
  await turmaStore.getTurmas()
})
</script>

<template>
  <div class="home">
    <h1>Turma</h1>
    <div class="form-group">
      <label for="turmaSelect">
        <h1>Turma</h1>
      </label>
      <select class="form-control" id="turmaSelect">
        <option
          v-for="turma in turmaStore.turmas"
          :key="turma.id"
          :value="turma.id"
        >
          {{ turma.nome }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="trimestreSelect">
        <h1>Trimestre</h1>
      </label>
      <select class="form-control" id="trimestreSelect">
        <option
          v-for="tri in trimestre"
          :key="tri.id"
          :value="tri.id"
        >
          {{ tri.description }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="descricaoTextarea">
        <h1>Como foi o trimestre?</h1>
      </label>
      <textarea
        v-model="preConselho.descricao_trimestre"
        class="form-control"
        id="descricaoTextarea"
        rows="3"
      ></textarea>
    </div>

    <div id="btn-submit">
      <button type="button" @click="registrarPreConselho()">Enviar</button>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  font-size: 10px;
}

form {
  width: 500px;
  height: 400px;
}

textarea {
  height: 200px;
}

.container {
  background-color: #dddddd;
  border-radius: 12px;
  border: 5px solid rgba(7, 7, 7, 0.125);
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  transition: all 0.3s ease;
}

.container:hover {
  transform: scale(1.125);
  border-color: #8739fa;
  transition: all 0.3s ease;
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow:
    0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}

.wrapper {
  display: flex;
  width: 952px;
  flex-direction: column;
  height: 600px;
}

h1 {
  color: #8739fa;
  font-size: 1.4rem;
  margin: 5px;
}

#btn-submit > button {
  display: inline-block;
  margin: 12px 15px;
  background: #8739fa;
  border-radius: 10px;
  color: #ffffff;
  border-style: none;
  padding: 10px;
  font-size: 15px;
}

#btn-submit > button:hover {
  background: #9752ff;
  color: #ffffff;
}
</style>
