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
  <body>
    <header class="hero" >
      <img src="../assets/" alt="">
        <div class="textos-hero">
            <h1>Título</h1>

            <a href="#sec">Ir</a>
        </div>
        <div class="svg-hero"  style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;"></path>
        </svg></div>
    </header>

    <section id="sec" class="wave-conteudo website" >

        <div class="conteudo-textos-main">
            <h2 class="titulo left"><strong>Título</strong></h2>
            <p class="paragrafo">Lorem ipsum dolor sit amet consectetur <span>span span span span span span</span>  debitis fuga doloribus soluta, asperiores eos ad labore nostrum nihil accusantium recusandae. Possimus maxime culpa nobis aliquid corporis voluptate?</p>

        </div>
    </section>

    <section class="info">
        <div class="container">

	<div class="limiter reveal">

		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
          <Tilt :options="this.options" parallax="true">
					<img src="../assets/images/banana.jpg" alt="IMG" style="border-radius: 40px;">
          </Tilt>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Entrar como:
					</span>

          <div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Docente
						</button>
					</div>
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Discente
						</button>
					</div>



				</form>
			</div>
		</div>

	</div>
        </div>
    </section>

    <section class="info-last">
        <div class="container last-section">
            <div class="container-textos-main">

            </div>

        </div>


    </section>

</body>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hero{
    background-image: linear-gradient(10deg, rgba(116, 125, 195, 0.699) 20%, rgba(85, 27, 35, 0.692) 100%), url("../assets/images/init2.jpg");
    width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
}

.textos-hero{
    height: 500px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.textos-hero h1{
    font-size: 60px;
}

.textos-hero p{
    font-size: 25px;
    margin-bottom: 20px;
}

.textos-hero a{
  justify-content: center;
  align-items: center;
    display: inline-block;
    text-decoration: none;
    padding: 10px 45px;
    background: #a18cd1;
    border-radius: 8px;
    color: #fff;
}

.textos-hero a:hover{
    background: rgb(176, 150, 228);
    border: solid 3px #fff;
}

.svg-hero{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    scroll-behavior: smooth;
}

/* Estilos gerais */

section{
  background: #fff;
  color: #000;
}

.container,
.wave-conteudo{
    width: 100%;
    overflow: hidden;
    margin: auto;
    padding: 0 0 80px 0;
}

.conteudo-textos-main{
    padding-left: 70px;
}

span {
    color: #9b138f;
}
.container{
    padding: 90px 90px;
}

.cont2{
    position: absolute;
    width: 140px;
    border-radius: 30px;
    margin-left: 40px;
}

.titulo{
    font-weight: 300;
    font-size: 35px;
    text-align: center;
    margin-bottom: 15px;
}

.titulo.left{
    text-align: left;
}

.titulo.right{
    text-align: right;
}

/* Section */

.website{
    display: flex;
    justify-content: space-between;
}

.website img{
    width: 48%;
}

.website .contenedor-textos-main{
    width: 40%;
}

.paragrafo{
    text-align: justify;
    margin-bottom: 20px;
    font-size: 20px;
}

/* Info */

.info{
    background: #8739fa;
    color: #fff;
}


/* Cards */

.conteudo-cards{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.card{
    width: 30%;
    text-align: center;
    height: 300px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    transform: scale(1);
    transition: transform 0.6s;
}

.card:hover{
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    transform: scale(1.03);
    cursor: pointer;
}

.card i{
    margin: 30px 0 20px 0;
    color: #cc9199;
    font-size: 50px;
}

.card p{
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 10px;
}

.last-section img{
    width: 48%;
}

.last-section .contenedor-textos-main{
    width: 40%;
}


/* footer */



@media screen and (max-width:800px){
    .textos-hero h1{
        text-align: center;
        font-size: 50px;
    }
    /* estilos gerais */
    .titulo{
        font-size: 35px;
    }

    .titulo.left{
        text-align: center;
    }

    .info p{
        text-align: center;
    }

    /* section */
    .website{
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    .website img{
        width: 100%;
    }

    .website .contenedor-textos-main{
        width: 100%;
    }

    /* Cards */

    .card{
        width: 90%;
        margin-bottom: 20px;
    }


    /* last */

    .last-section img{
        width: 98%;
    }

    .last-section .conteudo-textos-main{
        width: 98%;
        margin-bottom: 20px;
    }
 }
@media screen and (max-width:400px){
    .titulo,
    .textos-hero h1{
        font-size: 30px;
    }

    .textos-hero p{
        font-size: 20px;
        text-align: center;
    }

    .card{
        height: 380px;
    }

    .website .conteudo-textos-main{
        margin-bottom: 30px;
    }
}
/* Selecionar Cargo */


/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

body, html {
	height: 100%;
	font-family: Poppins-Regular, sans-serif;
}

/*---------------------------------------------*/
a {
	font-family: Poppins-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
	outline: none !important;
}

/*---------------------------------------------*/
h1,h2,h3,h4,h5,h6 {
	margin: 0px;
}

p {
	font-family: Poppins-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
}

ul, li {
	margin: 0px;
	list-style-type: none;
}


/*---------------------------------------------*/
input {
	outline: none;
	border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; }
input:focus::-moz-placeholder { color:transparent; }
input:focus:-ms-input-placeholder { color:transparent; }

textarea:focus::-webkit-input-placeholder { color:transparent; }
textarea:focus:-moz-placeholder { color:transparent; }
textarea:focus::-moz-placeholder { color:transparent; }
textarea:focus:-ms-input-placeholder { color:transparent; }

input::-webkit-input-placeholder { color: #999999; }
input:-moz-placeholder { color: #999999; }
input::-moz-placeholder { color: #999999; }
input:-ms-input-placeholder { color: #999999; }

textarea::-webkit-input-placeholder { color: #999999; }
textarea:-moz-placeholder { color: #999999; }
textarea::-moz-placeholder { color: #999999; }
textarea:-ms-input-placeholder { color: #999999; }

/*---------------------------------------------*/
button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

iframe {
	border: none !important;
}


/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #999999;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
}


/*//////////////////////////////////////////////////////////////////
[ login ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.wrap-login100 {
  width: 960px;
  background: #fff;
  border-radius: 30px;
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 87px 130px 33px 95px;
}

/*------------------------------------------------------------------
[  ]*/
.login100-pic {
  width: 316px;
}

.login100-pic img {
  max-width: 100%;
}


/*------------------------------------------------------------------
[  ]*/
.login100-form {
  width: 290px;
}

.login100-form-title {
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;

  width: 100%;
  display: block;
  padding-bottom: 54px;
}


/*---------------------------------------------*/
.wrap-input100 {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input100 {
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;

  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
}


/*------------------------------------------------------------------
[ Focus ]*/
.focus-input100 {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87,184,70, 0.8);
}

.input100:focus + .focus-input100 {
  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
  animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

.symbol-input100 {
  font-size: 15px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666666;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-input100 + .symbol-input100 {
  color: #57b846;
  padding-left: 28px;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

.login100-form-btn {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;

  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background: #333333;
}



/*------------------------------------------------------------------
[ Responsive ]*/



@media (max-width: 992px) {
  .wrap-login100 {
    padding: 177px 90px 33px 85px;
  }

  .login100-pic {
    width: 35%;
  }

  .login100-form {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .wrap-login100 {
    padding: 100px 80px 33px 80px;
  }

  .login100-pic {
    display: none;
  }

  .login100-form {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding: 100px 15px 33px 15px;
  }
}




@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}
</style>
