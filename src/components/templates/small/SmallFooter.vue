<script>
// import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();
</script>
<template>

  <footer>
  <div class="footer">



  <div class="row">
  Empresa Copyright © 2024 Empresa - All rights reserved ||
  </div>
  </div>
  </footer>
  </template>

  <style scoped>
  .row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }


  .footer{

  background:#ffffff;
  padding: 20px 0px;
  font-family: 'Play', sans-serif;
  text-align:center;
  z-index: 1000;
  border-top: solid 2px #000;
  }

  .footer .row{
  width:100%;
  padding:1px;
  color:rgb(0, 0, 0);
  font-size:0.8em;
  }

  .footer .row a{
  text-decoration:none;
  color:rgb(0, 0, 0);
  transition:0.5s;
  margin: 2px;
  }

  .footer .row a:hover{
  color:#696868;
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

  }
  </style>
