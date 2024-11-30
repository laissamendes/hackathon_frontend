<template>

  <footer>
  <div class="footer">


  <div class="row">
  <ul>
  <li><a href="#">Contact us</a></li>
  <li><a href="#">Our Services</a></li>
  <li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Terms & Conditions</a></li>
  <li><a href="#">Career</a></li>
  </ul>
  </div>


  </div>
  </footer>
  </template>

  <style scoped>

  .footer{
      position: static;

      bottom: 0%;
      width: 100%;
  background:#ffffff;
  padding: 20px 00px;
  font-family: 'Play', sans-serif;
  text-align:center;
  z-index: 100;
  top: 85%;
  border: solid 2px #000;
  }

  .footer .row{
  width:100%;
  padding:1px;
  color:rgb(0, 0, 0);
  font-size:1.0em;
  }

  .footer .row a{
  text-decoration:none;
  color:rgb(0, 0, 0);
  transition:0.5s;
  margin: 2px;
  }

  .footer .row a:hover{
  color:#580e46;
  }

  .footer .row ul{
  width:100%;
  }

  .footer .row ul li{
  display:inline-block;
  margin:0px 30px;
  }

  .footer .row a i{
  font-size:2em;
  margin:0% 1%;
  }

  @media (max-width:720px){
  .footer{
  text-align:left;
  padding:5%;
  }
  .footer .row ul li{
  display:block;
  margin:10px 0px;
  text-align:left;
  }
  .footer .row a i{
  margin:0% 3%;
  }
  }
  </style>
