<script>
import Tilt from 'vanilla-tilt-vue'

export default {
  name: 'App',
  components: {
    Tilt,
  },
  data: function () {
    return {
      options: { gyroscope: true },
    }
  },
}
</script>
<template>
  <div class="home">
    <div id="demo-modal" class="modal wrap">
    <div class="modal__content wrap">




        <a href="#" class="modal__close">&times;</a>
    </div>



</div>
    <div class="gradient" />

    <div class="buttons">
      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <h1></h1>
              <p>Turma</p>
              <div class="form-floating mb-3">

                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">Primeiro</option>
                  <option value="2">Segundo</option>
                  <option value="3">Terceiro</option>
                </select>
              </div>
              <p>Nota menor q 6</p>
              <div class="form-floating mb-3">

                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">3</option>
                  <option value="2">2</option>
                  <option value="3">1</option>
                </select>
              </div>
              <div class="form-floating mb-3">
                <p>Ocorrência</p>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">3</option>
  <option value="2">2</option>
  <option value="3">1</option>
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
              <div class="banner-image">
                <button href="#demo-modal" type="button"  style="height: 50px; border: none;"> <a class="btn btn-primary btn-lg" href="#demo-modal">Nome Aluno</a></button>
              </div>
            </div>


          </div>
        </Tilt>
      </div>
    </div>
  </div>

</template>
<style scoped>



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
  font-family: 'Roboto', sans-serif;
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
  /* solid background */
  background: rgb(0, 212, 255);

  /* gradient background*/
  background: linear-gradient(45deg, rgba(0, 212, 255, 1) 0%, rgba(11, 3, 45, 1) 100%);

  /* photo background */
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
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
container:hover .overlay {
  transform: scale(4) translateZ(0);
}
container:hover .circle {
  border-color: var(--bg-color-purple);
  background: var(--bg-color);
}
container:hover .circle:after {
  background: var(--bg-color-purple);
}
container:hover p {
  color: var(--text-color-hover);
}
container:active {
  transform: scale(1) translateZ(0);
  box-shadow:
    0 15px 24px rgba(0, 0, 0, 0.11),
    0 15px 24px var(--box-shadow-color);
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
  font-family: 'Righteous', sans-serif;
  color: #8739fa;
  text-transform: uppercase;
  font-size: 2.4rem;
  padding-top: 20px;
  margin: 0px;
}
p {
  color: #000000;
  font-family: 'Lato', sans-serif;
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
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}
.btn + .btn {
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
  font-family: 'Magisho', sans-serif;
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
.gradient {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
}
.hero {
  position: fixed;
  bottom: 0;
  z-index: -5;
  min-width: 100%;
  min-height: 100%;
  animation: fade-in 1.3s forwards;
  justify-content: center;
  align-content: center;
  object-position: top;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently*/
}
.wrap{
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
@media (max-width:720px){
  div{
    flex-wrap: nowrap;
  }

.container{
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

}

section{
    height:80vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
section::before,
.card1::before{
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50% 0px;
    opacity:.8;
}




.card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    width: 900px;
    height: 480px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    background-color: rgba(255,255,255,0.05);
    filter: blur(0.2px);
}
.left-container {
    flex: 1;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:100%;
    padding: 10px;
    margin: 30px;
    border-right: 1px solid #e4e4e4;
  }

  .right-container {
    flex: 1;
    max-width:70%;
    height:430px;
    padding: 10px;
    margin: 20px;
    border-radius:30px;
  }
  @media only screen and (max-width: 860px) {
    .card
     {
     flex-direction: column;
     margin: 10px;
     height: auto;
     width: 100%;
    }
    .left-container{
        flex: 1;
        max-width:100%;
        border:none;
    }
 section::before{
        top:4%;
        left:51%;
    } .gradienttext{
      opacity: 0px;
    }
  }
  @media only screen and (max-width: 600px) {
    .card
     {
     flex-direction: column;
     margin: 10px;
    }
    .left-container{
        flex: 1;
        max-width:100%;

    }
    .card1::before{
        bottom: -14%;
        left: 1%;
    }
     h3{
      opacity: 0;
    }
     a{
      opacity: 0;
    } .credit{
       opacity: 0;
      } .left-container{
        margin: 0px;
      } .right-container{
        margin: 0px;
      }


  }
  img {
    border: double 5px transparent;
    border-radius: 50%;
    background-image: linear-gradient(white, white),
                      linear-gradient(to right, #ee00ff,#8d0f7c);
    background-origin: border-box;
    background-clip: content-box, border-box;
    width: 200px;
    height: 200px;
    max-width: 200px;
    margin-top: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  h3 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 5px;
  }
  .gradienttext{
    background-image: linear-gradient(to right, #d804cd 0%, #0072ff 100%);
    color: transparent;

  }






  table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 280px;
    border-collapse: collapse;
  }

  td {

    padding: 10px;
    border: none;
    border-radius: 20px;
    color: rgb(0, 0, 0);
  }

  td:first-child {
    font-weight: bold;
  }
  .credit a {
  text-decoration: none;
  color: #000000;
  font-weight: 800;
}

.credit {
    color: #fff;
  text-align: center;
  margin-top: 10px;
  font-family: Verdana,Geneva,Tahoma,sans-serif;
}

</style>
