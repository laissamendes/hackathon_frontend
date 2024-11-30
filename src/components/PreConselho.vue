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
/* Estilos gerais */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

.home {
  max-width: 600px;
  margin: 20px auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Títulos */
h1 {
  color: #4a4a4a;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Formulários */
.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 8px;
  display: block;
}

select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: none;
  height: 100px;
}

/* Botão de envio */
#btn-submit > button {
  width: 100%;
  padding: 10px;
  background-color: #8739fa;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#btn-submit > button:hover {
  background-color: #9752ff;
}
</style>

