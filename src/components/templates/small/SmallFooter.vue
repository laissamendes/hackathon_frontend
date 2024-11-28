<script>
// import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();
</script>
<template>
    
  <footer>
  <div class="footer">
  <div class="row">
  <a href="#"><i class="fa fa-facebook"></i></a>
  <a href="#"><i class="fa fa-instagram"></i></a>
  <a href="#"><i class="fa fa-youtube"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  </div>
  
  <div class="row">
  <ul>
  <li><a href="#">Contact us</a></li>
  <li><a href="#">Our Services</a></li>
  <li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Terms & Conditions</a></li>
  <li><a href="#">Career</a></li>
  <!-- <li>
    		<a href="#">Logado: {{ authStore.user.email }} </a> |
    		
  </li> -->
  </ul>
  </div>
  
  <div class="row">
  INFERNO Copyright © 2021 Inferno - All rights reserved || 
  </div>
  </div>
  </footer>
  </template>
  
  <style scoped>
  
  
  .footer{
      position: sticky;
  background:#000;
  padding: 20px 0px;
  font-family: 'Play', sans-serif;
  text-align:center;
  z-index: 1000;
  }
  
  .footer .row{
  width:100%;
  padding:1px;
  color:gray;
  font-size:0.8em;
  }
  
  .footer .row a{
  text-decoration:none;
  color:gray;
  transition:0.5s;
  margin: 2px;
  }
  
  .footer .row a:hover{
  color:#fff;
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