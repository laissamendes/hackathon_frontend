<script setup>
import { ref } from 'vue'

const trimestre = ref([
  { id: 1, description: "1° trimestre" },
  { id: 2, description: "2° trimestre" },
  { id: 3, description: "3° trimestre" }
])

const turma = ref([
  { id: 2, description: "1INFO1" },
  { id: 3, description: "1INFO2" },
  { id: 4, description: "1INFO3" },
  { id: 5, description: "2INFO1" },
  { id: 6, description: "2INFO2" },
  { id: 7, description: "2INFO3" },
  { id: 8, description: "3INFO1" },
  { id: 9, description: "3INFO2" },
  { id: 1, description: "3INFO3" },
  { id: 10, description: "1QUIMI" },
  { id: 11, description: "2QUIMI" },
  { id: 12, description: "3QUIMI" },
  { id: 13, description: "1AGRO1" },
  { id: 14, description: "1AGRO2" },
  { id: 15, description: "1AGRO3" },
  { id: 16, description: "2AGRO1" },
  { id: 17, description: "2AGRO2" },
  { id: 18, description: "2AGRO3" },
  { id: 19, description: "3AGRO1" },
  { id: 20, description: "3AGRO2" },
  { id: 21, description: "3AGRO3" },
])

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

                <select class="form-select" aria-label="Default select example">
                  <option :value="tri.id" v-for="tri in trimestre" :key="tri.id">{{ tri.description }}</option>
                </select>
              </div>
              <p>Turma</p>
              <div class="form-floating mb-3">

                <select class="form-select" aria-label="Default select example">
                  <option :value="tur.id" v-for="tur in turma" :key="tur.id">{{ tur.description }}</option>
                </select>
              </div>
            </div>

            <div class="button-wrapper">
              <button href="#demo-modal" class="btn fill"><a style="text-decoration-line: none; color: white" href="#demo-modal">Iniciar Conselho</a></button>
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
                <i class="mdi mdi-file-document-multiple-outline"/>
              </div>
            </div>

            <div class="button-wrapper">
            <router-link to="/addocorrencia" href="#demo-modal" class="btn fill">Adcionar</router-link>
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
  width: 100%;
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
.bnt_fill{
color: white;
}
</style>
