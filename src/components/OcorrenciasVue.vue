<script setup>
import { ref } from 'vue'
import Tilt from 'vanilla-tilt-vue'
import { onMounted } from 'vue'
import { useOcorrenciaStore } from '@/stores/ocorrencia.js'
import { useTurmaStore } from '@/stores/turma'


const ocorrenciaStore = useOcorrenciaStore()
const turmaStore = useTurmaStore()

async function getOcorrencia() {
  await ocorrenciaStore.getOcorrencia()
}

onMounted(async () => {
  await getOcorrencia()
})
onMounted(async () => {
  await turmaStore.getTurmas()
})

const options = ref({ gyroscope: true })
</script>
<template>
  <div class="home">
    <div id="demo-modal" class="modal wrap">
      <div class="modal__content wrap">
        <div class="card-container">

<img class="round" src="" alt="user" />
<h3>Daniela Venturi</h3>
<p>3 info 3          Matrícula:2022328908 </p>
<p>
  email:danielaventuriifc@gmail.com
</p>

<div class="skills">
            <table class="minha-tabela">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>T1</th>
                  <th>T2</th>
                  <th>T3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matemática</td>
                  <td>7</td>
                  <td>5</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Portugues</td>
                  <td>5</td>
                  <td>5</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Geografia</td>
                  <td>3</td>
                  <td>7</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <a href="#" class="modal__close">&times;</a>
      </div>
    </div>
    <div class="gradient" />

    <div class="buttons">
      <div>
        <Tilt :options="options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <h1></h1>

              <div class="form-floating mb-3">
                <p>Turma</p>
                <select class="form-select" aria-label="Default select example">
                  <option v-for="turma in turmaStore.turmas" :key="turma.id" :value="turma.id">
                    {{ turma.nome }}
                  </option>
                </select>
              </div>

              <div class="form-floating mb-3">
                <p>Tipo Ocorrência</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Atraso</option>
                  <option value="1">Sem Uniforme</option>
                  <option value="2"></option>
                </select>
              </div>
            </div>
          </div>
        </Tilt>
      </div>

      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <p>Alunos</p>
              <div  class="banner-image" >
                <button href="#demo-modal" type="button"  style="height: 50px; border: none;">

Daniela Venturi


                  <a class="btn" href="#demo-modal">Visualizar</a></button>
              </div>
            </div>


          </div>
        </Tilt>
      </div>
    </div>
  </div>
</template>
<style scoped>
h3 {
  margin: 10px 0;
}

h6 {
  margin: 5px 0;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  line-height: 21px;
}

.card-container {
  background-color: #8739fa;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 600px;
  max-width: 100%;
  text-align: center;
  bottom: 40px;
}

.card-container .pro {
  color: #8739fa;;
  background-color: #febb0b;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  padding: 3px 7px;
  position: absolute;
  top: 30px;
  left: 30px;
  width: 600px;
}

.card-container .round {
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
}

button.primary {
  background-color: #03bfcb;
  border: 1px solid #03bfcb;
  border-radius: 3px;
  color: #231e39;

  font-weight: 500;
  padding: 10px 25px;
}

button.primary.ghost {
  background-color: transparent;
  color: #02899c;
}

.skills {
  background-color: #1f1a36;
  text-align: left;
  padding: 15px;
  margin-top: 30px;
}

.skills ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.skills ul li {
  border: 1px solid #2d2747;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin: 0 7px 7px 0;
  padding: 7px;
}

.wrapper1 {
  height: 100vh;
  /* This part is important for centering the content */
  display: flex;
  align-items: center;
  justify-content: center;
  /* End center */
  background: -webkit-linear-gradient(to right, #834d9b, #d04ed6);
  background: linear-gradient(to right, #834d9b, #d04ed6);
}

.wrapper1 a {
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  color: #585858;
}

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
  background: rgba(77, 77, 77, 0.7);
  transition: all 0.4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
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

body {
  background-color: #ffffff;
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
  color: rgba(226, 34, 226, 0.9);
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
}

.banner-image {
  background-image: url();
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
  border-radius: 12px;
}

h1 {
  color: #8739fa;
  text-transform: uppercase;
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
  text-transform: uppercase;
}

.button-wrapper {
  margin-top: 18px;
}

.btn {
  border: none;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: #8739fa;
  color: white;
}

.btn+.btn {
  margin-left: 10px;
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
  border-color: rgba(214, 63, 181, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all 0.3s ease;
}

.home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-position: top;
  position: sticky;
}

.home-button {
  display: block;
  transition: 0.5s;
  border: none;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0.5em 2em;
  justify-self: center;
  font-size: 1.2rem;

  width: 13em;
  position: relative;
  cursor: pointer;
  border-radius: 0.4em;
}

.home-button:hover {
  background-color: rgb(199, 53, 155);
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-radius: 0.9em;
}

.buttons {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.nav-button {
  display: flex;
  align-self: center;
  text-align: center;
  margin: 1em;
  position: relative;
  height: 2.9em;
  padding: 0;
  text-decoration: none;
  flex-direction: column;
}


.wrap {
  flex-wrap: wrap;
}

@media (min-aspect-ration: 16/9) {
  .hero {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ration: 16/9) {
  .hero {
    width: auto;
    height: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .buttons {
    flex-direction: column;
    transform: translateY(50%);
  }
}

@media (max-width: 720px) {
  div {
    flex-wrap: wrap;
  }

  .container {
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button {
    height: auto;
  }
}

/* Estilo geral da tabela */
.minha-tabela {
  width: 100%;
  border-collapse: collapse;
  /* Remove espaços entre as células */
  font-family: Arial, sans-serif;
  /* Define a fonte */
}

/* Estilo das células de cabeçalho */
.minha-tabela th {
  background-color: #873488;
  /* Cor de fundo */
  color: rgb(255, 255, 255);
  /* Cor do texto */
  padding: 10px;
  /* Espaçamento interno */
  text-align: left;
  /* Alinha o texto à esquerda */
}

/* Estilo das células de dados */
.minha-tabela td {
  padding: 8px;
  border: 1px solid #ffffff;
  /* Adiciona borda entre as células */
}

/* Estilo das linhas alternadas */
.minha-tabela tr:nth-child(even) {
  background-color: #f2f2f24c;
}

/* Estilo ao passar o mouse por cima das linhas */
.minha-tabela tr:hover {
  background-color: #dddddd39;
}
</style>
