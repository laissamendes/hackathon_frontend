<script setup>
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


import { onMounted } from 'vue';

    import Rellax from 'rellax'

    onMounted(() => {
      let rellax = new Rellax('.rellax');



  });



</script>


<template>

     <section class="oink">

      <img class=" rellax" data-rellax-speed="1" src="@/assets/images/céu.png" alt="céu" id="ceu">
      <img class="estrelas rellax" data-rellax-speed="-7" src="@/assets/images/estrelas.png" alt="estrelas" id="estrelas">

      <img class="one rellax" data-rellax-speed="-5" src="@/assets/images/montanhas.png" alt="montanhas " id="montanhas">

      <h2 id="texto">BANANA</h2>
    <a href="#sec" id="btn">Explorar</a>
    <img class="" src="@/assets/images/rua.png" alt="rua" id="rua">
  </section>
  <section style="padding-top: 0px; height: 100%; padding-bottom: 0px; padding-right: 0px; padding-left: 0px;">
  <div class="sec" id="sec">
    <h2 class="reveal">Parallax</h2>
    <p class="reveal">Lorem 10ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis in expedita quibusdam
      nostrum mollitia optio, ab dolores? Ab beatae blanditiis eum ipsa velit deserunt eaque voluptate quis a esse Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Debitis sunt ullam tempore deleniti sapiente fuga quos libero
      accusamus ipsum vel molestiae omnis quasi voluptatibus ab, nobis facere, ratione sequi consequatur Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Nobis optio deleniti rem error nisi accusantium ut obcaecati tenetur
      dolor, nostrum fugit ipsam, voluptate corporis animi excepturi aspernatur ea saepe? Eum. <br><br> Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Fugiat, repellat natus? Cum possimus id tempora quo error animi, quod
      quos minima dolorem tenetur quibusdam vero totam fugit eius. Hic, nostrum! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Obcaecati eligendi quae tempora error minus, quaerat voluptas reprehenderit. Minima ut in, cum
      ex corporis, adipisci aperiam quis repellendus vel, atque facere! Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Soluta labore pariatur, ducimus, fugiat rerum facere natus, dolor iste ad corporis maxime in!
      Nisi molestiae maxime, perferendis doloribus omnis corrupti incidunt.

      justify-content: center; top: -100px; height: 950px;"><br><br>Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Soluta suscipit dignissimos id veniam quas perferendis molestias atque vel rem blanditiis esse, laudantium
      est neque quos ea. Officiis soluta ullam ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta
      odio repudiandae quaerat? Cum at, quis aut ad sunt excepturi aspernatur doloremque quibusdam esse officiis
      blanditiis numquam? Deserunt, reprehenderit architecto. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nulla obcaecati facere accusantium voluptas repellat? Quis, aut. Maiores asperiores, sapiente iusto aliquam
      doloribus voluptas dignissimos consectetur dolor dolorem animi magni exercitationem?</p>
  </div>
</section>
  <div id="parallax-wrapper">


  <div>
    <div class="p-one parallax-inner">
      <h2>PIPIPI POPOPO</h2>
    </div>
  </div>
  <div>
    <div class="content-text">
      <span class="first-letter red"></span>

      <div class="line-break"></div>
    </div>
  </div>
</div>




</template>

<style scoped>
#parallax-wrapper{
  width: 100%;
}
.p-one{
 background-image:  linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(@/assets/image/ar.jpg);
}
.parallax-inner{
  position:relative;
  min-height: 500px;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;
}
.parallax-inner > h2{
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -20.5px;
  width: 100%;
  text-align: center;
}
.content-text p{
  padding: 25px 50px 25px 50px;
  font-weight: 400px;
  text-align: justify;
  line-height: 24px;
}
.first-letter{
  float: left;
  font-weight: 400;
  font-size: 84px;
  line-height: 64px;
  padding-top: 2px;
  padding-right: 8px;
  padding-left: 4px;
}

.oink {
  background-color: #0d0422;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;

}


* {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(#2b1055, #7597de);
  z-index: 1;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}

header .logo {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  list-style: none;
  margin-left: 20px;
}

header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}

header ul li a:hover {
  background: #fff;
  color: #2b1055;
}

section {
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #0d0422, transparent);
  z-index: 10;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

section img#lua {
  mix-blend-mode: screen;
  width: 300px;
  right: 90%;

}

section img#montanhas {
  z-index: 8;
}

#texto {
  position: absolute;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
  top: 90px;
  transition: 0.8s;
}

body {
  background-color: #0d0422;
  ;
}

#rua {
  z-index: 10;
}

#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  margin-right: 280px;
  border-radius: 40px;
  background: #fff;
  color: #000000;
  font-size: 1.5em;
  z-index: 9;
  transform: translate(90%);
  transition: 0.5s;
}

#btn:hover {
  background: #969595;
  color: #fff;
}

.sec {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 100px;
  background: #0d0422;
}

.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}

.sec p {
  font-size: 1.2em;
  color: #fff;
}

#texto {
  padding: 150px;
}

.reveal {

  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
.container {
  display: flex;
  width: 1980px;
  align-items: center;
  justify-content: center;
  background-image: url(@/assets/img/montanhas.png);
  background-size: cover;
  background-position: center;

/*  this is where the magic happens:  */
  background-attachment: fixed;
}

.estrelasp {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(@/assets/img/estrelas.png);
  background-size: cover;
  background-position: center;

/*  this is where the magic happens:  */
  background-attachment: fixed;
}

@media screen and (max-width:500px){
  .parallax-inner{
    min-height: 350px;
    background-size: cover;
  }}
</style>
