<script setup>
import { onMounted, ref } from 'vue'

import { useTurmaStore } from '@/stores/turma'
import { usePreConselhoStore } from '@/stores/preConselho.js'

const preConselhoStore = usePreConselhoStore()
const turmaStore = useTurmaStore()

const trimestre = ref([
  { id: 1, description: "1° trimestre" },
  { id: 2, description: "2° trimestre" },
  { id: 3, description: "3° trimestre" }
])

// const turmas = ref ([
//   {id:2, nome:"1INFO1"},
//   {id:3, nome:"1INFO2"},
//   {id:4, nome:"1INFO3"},
//   {id:5, nome:"2INFO1"},
//   {id:6, nome:"2INFO2"},
//   {id:7, nome:"2INFO3"},
//   {id:8, nome:"3INFO1"},
//   {id:9, nome:"3INFO2"},
//   {id:1, nome:"3INFO3"},
//   {id:10, nome:"1QUIMI"},
//   {id:11, nome:"2QUIMI"},
//   {id:12, nome:"3QUIMI"},
//   {id:13, nome:"1AGRO1"},
//   {id:14, nome:"1AGRO2"},
//   {id:15, nome:"1AGRO3"},
//   {id:16, nome:"2AGRO1"},
//   {id:17, nome:"2AGRO2"},
//   {id:18, nome:"2AGRO3"},
//   {id:19, nome:"3AGRO1"},
//   {id:20, nome:"3AGRO2"},
//   {id:21, nome:"3AGRO3"},
// ])

const preConselho = ref({
  turma: '',
  trimestre: '',
  descricao_trimestre: '',
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
    <div class="buttons">
      <div>
        <div class="container">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">
                <h1>Turma</h1>
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option :value="turma.id" v-for="turma in turmaStore.turmas" :key="turma.id">{{ turma.nome }}</option>
              </select>            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                <h1>Trimestre</h1>
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option :value="tri.id" v-for="tri in trimestre" :key="tri.id">{{ tri.description }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                <h1>Como foi o trimestre?</h1>
              </label>
              <textarea v-model="preConselho.descricao_trimestre" class="form-control" id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>
            <div id="btn-submit">
              <button type="submit" @click="registrarPreConselho()">Enviar</button>
            </div>

          </form>
        </div>
      </div>
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

div.container {
  height: 570px;
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

.container:hover .overlay {
  transform: scale(4) translateZ(0);
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

#btn-submit>button {
  display: inline-block;
  margin: 12px 15px;
  background: #8739fa;
  border-radius: 10px;
  color: #ffffff;
  border-style: none;
  padding: 10px;
  font-size: 15px;
}

#btn-submit>button:hover{
  background: #9752ff;
  color: #ffffff;
}
</style>
