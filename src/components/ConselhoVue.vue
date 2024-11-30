<script setup>
import { onMounted, ref } from 'vue'
import { useTurmaStore } from '@/stores/turma'
import { useConselhoClassseStore } from '@/stores/conselhoClasse'
import { useTrimestreStore } from '@/stores/trimestre'

const turmaStore = useTurmaStore()
const conselhoClasseStore = useConselhoClassseStore()
const trimestreStore = useTrimestreStore()

const conselhoClasse = ref({
  turma: '',
  trimestre: '',
})

onMounted(async () => {
  await turmaStore.getTurmas()
  await trimestreStore.getTrimestres()
})

async function iniciarConselhoClasse() {
  await conselhoClasseStore.criarConselhoClasse(conselhoClasse.value)
}
</script>
<template>
  <div class="home">
    <div id="demo-modal" class="modal wrap">
      <div class="modal__content wrap">
        <div class="row g-2 wrap">
          <div class="col-md">
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com">
              <label for="floatingInputGrid">Aluno:</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com">
              <label for="floatingInputGrid">Disciplina:</label>

            </div>
          </div>
        </div>
        <a href="#" class="modal__close">&times;</a>
      </div>
    </div>

    <div class="buttons">
      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <h1></h1>
              <p>Trimestre</p>
              <div class="form-floating mb-3">

                <select class="form-select" aria-label="Default select example" v-model="conselhoClasse.trimestre">
                  <option v-for="trimestre in trimestreStore.trimestres" :key="trimestre.id" :value="trimestre.id">
                    {{ trimestre.periodo }}
                  </option>
                </select>
              </div>
              <p>Turma</p>
              <div class="form-floating mb-3">

                <select class="form-select" aria-label="Default select example" v-model="conselhoClasse.turma">
                  <option v-for="turma in turmaStore.turmas" :key="turma.id" :value="turma.id">
                    {{ turma.nome }}
                  </option>
                </select>
              </div>
            </div>

            <div class="button-wrapper">
              <button href="#demo-modal" class="btn fill" @click="iniciarConselhoClasse()">Iniciar Conselho</button>
            </div>
          </div>
        </Tilt>
      </div>



      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <p>Ocorrências</p>
              <div class="banner-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-document-multiple</title><path d="M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4M15 7H20.5L15 1.5V7M8 0H16L22 6V18C22 19.11 21.11 20 20 20H8C6.89 20 6 19.1 6 18V2C6 .89 6.89 0 8 0M17 16V14H8V16H17M20 12V10H8V12H20Z" /></svg>
              </div>
            </div>

            <div class="button-wrapper">
              <router-link to="/ocorrencia" href="#demo-modal" class="btn fill">Adcionar</router-link>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  </div>

</template>
<style scoped>
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 800px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal__footer {
  text-align: right;

  a {
    color: #585858;
  }

  i {
    color: #d02d2c;
  }
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.cardback {
  background-size: cover;
  background-position: center;
  width: 252px;
  height: 300px;
  border-radius: 30px;

  padding: 15px;
}

.container {
  width: 440px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: #dddddd;
  border-radius: 12px;
  border: 5px solid rgba(7, 7, 7, 0.125);
  padding: 18px;
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
  color: #8739fa;
  border-color: #8739fa;
  transition: all 0.3s ease;
}

.container:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow:
    0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
}

.wrapper {
  width: 252px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner-image {
  background-image: url();
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 150px;
  border-radius: 12px;
}

h1 {
  color: #8739fa;
  font-size: 2.4rem;
  padding-top: 20px;
  margin: 0px;
}

p {
  color: #000000;
  text-align: center;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: 2px;
}

.button-wrapper {
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.outline {
  background: transparent;
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid #000000;
  transition: all 0.3s ease;
}

.outline:hover {
  transform: scale(1.125);
  color: #8739fa;
  border-color: #8739fa;
  transition: all 0.3s ease;
}

.fill {
  background: #8739fa;
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}

.bnt_fill {
  color: white;
}
</style>
