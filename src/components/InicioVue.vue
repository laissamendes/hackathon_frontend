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
   <div class="container">
                    <div class="card">
                        <div class="box">
                            <div class="content">

                                <h3>Adicionar Ocorrência</h3>
                                <div class="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>badge-account-horizontal-outline</title><path d="M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,8H14V10H20V8M20,12H14V14H20V12M20,16H14V18H20V16M22,4H14V6H22V20H2V6H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M13,6H11V2H13V6Z" /></svg>
                                    <router-link class="btn outline" to="/ocorrencia" >Ir</router-link>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <div class="content">

                                <h3>Iniciar Conselho de Classe</h3>
                                <div class="svg">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>account-group</title><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" /></svg>
                                </div>
                                    <router-link class="btn outline" to="/conselho" >Ir</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <div class="content">

                                <h3>Visualizar Histórico</h3>
                                <div class="svg" >
                                  <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>account-file</title><path d="M7.5 5C9.43 5 11 6.57 11 8.5C11 10.43 9.43 12 7.5 12C5.57 12 4 10.43 4 8.5C4 6.57 5.57 5 7.5 5M1 19V16.5C1 14.57 4.46 13 7.5 13C8.68 13 9.92 13.24 11 13.64V19H1M22 19H14C13.45 19 13 18.55 13 18V6C13 5.45 13.45 5 14 5H19L23 9V18C23 18.55 22.55 19 22 19M18 10H21V9.83L18.17 7H18V10Z" /></svg>
                                </div>
                                    <router-link class="btn outline" to="/historico" >Ir</router-link>
                            </div>
                        </div>
                    </div>

                </div>



</template>
<style scoped>
.svg{
  width: 200px;
}
.container1{

  z-index: 1000;
  max-width: 1350px;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.container1 .main-card{
  display: flex;
  justify-content: space-evenly;
  width: 120%;
  transition: 1s;
}
#two:checked ~ .main-card{
  margin-left: -100%;
}
.container1 .main-card .cards{
  width: calc(100% / 1 - 10px);
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: space-between;
}
.main-card .cards .card{
  width: calc(100% / 3 - 10px);
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  height: 400px;
}
.main-card .cards .card:hover{
  transform: translateY(-15px);
}
.cards .card .content{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.cards .card .content .img{
  height: 130px;
  width: 130px;
  border-radius: 50%;
  padding: 3px;
  background: #FF676D;
  margin-bottom: 14px;
}
.card .content .img img{
  height: 100%;
  width: 100%;
  border: 3px solid #ffff;
  border-radius: 50%;
  object-fit: cover;
}
.card .content .name{
  font-size: 20px;
  font-weight: 500;
}
.card .content .job{
  font-size: 20px;
  color: #FF676D;
}
 .container1 .button{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
}
.button1 label{
  height: 15px;
  width: 15px;
  border-radius: 20px;
  background: #000000;
  margin: 0 4px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.button1 label.active{
  width: 35px;
}
#one:checked ~ .button1 .one{
  width: 35px;
}
#one:checked ~ .button1 .two{
  width: 15px;
}
#two:checked ~ .button1 .one{
  width: 15px;
}
#two:checked ~ .button1 .two{
  width: 35px;
}
input[type="radio"]{
  display: none;
}
@media (max-width: 768px) {
  .main-card .cards .card{
    margin: 20px 0 10px 0;
    width: calc(100% / 2 - 10px);
  }
}
@media (max-width: 600px) {
  .main-card .cards .card{
    /* margin: 20px 0 10px 0; */
    width: 100%;
  }
}

#parallax-wrapper{
  width: 100%;
}
.p-one{
 background-image:  linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(@/assets/img/sads.png);
}

.p-one1{
    width: 100%;

}
.parallax-inner{
  position:relative;
  min-height: 500px;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 30px;
}
.parallax-inner > h2{
  color: #000000;
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



* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    background: hsl(238, 100%, 6%);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    max-width: 1200px;
    margin: 40px 0;
}

body .container .card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
    transition: 0.5s;
}

body .container .card:nth-child(1) .box .content a {
    background: #ffffff;
}

body .container .card:nth-child(2) .box .content a {
    background: #ffffff;
}

body .container .card:nth-child(3) .box .content a {
    background: #ffffff;
}

body .container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #8739fa;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
}

body .container .card .box:hover {
    transform: translateY(-50px);
}

body .container .card .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
}

body .container .card .box .content {
    padding: 20px;
    text-align: center;
}

body .container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
}

body .container .card .box .content h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
}

body .container .card .box .content p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
}

body .container .card .box .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: rgb(0, 0, 0);
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}

body .container .card .box .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #a1a1a1;
    color: #ffffff;
}



@media (max-width: 600px) {
    .container {
        width: 100%;
        flex-wrap: wrap;
    }

    body {
        text-transform: none;
        width: 115%;
    }
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
    transform: translateY(50%);

  }.home{

    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
