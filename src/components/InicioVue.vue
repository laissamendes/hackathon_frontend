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
    <div class="gradient" />

    <div class="buttons">
      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <div class="banner-image">
                <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>badge-account-horizontal-outline</title><path d="M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,8H14V10H20V8M20,12H14V14H20V12M20,16H14V18H20V16M22,4H14V6H22V20H2V6H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M13,6H11V2H13V6Z" /></svg>
              </div>
            </div>

            <div class="button-wrapper">
              <button class="btn fill">DETAILS</button>

            </div>
          </div>
        </Tilt>
      </div>

      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <div class="banner-image">
                <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>account-group</title><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" /></svg>
              </div>
            </div>

            <div class="button-wrapper">
              <button class="btn outline">DETAILS</button>

            </div>
          </div>
        </Tilt>
      </div>

      <div>
        <Tilt :options="this.options" parallax="true">
          <div class="container">
            <div class="wrapper">
              <div class="banner-image">
                <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>account-tie-voice</title><path d="M16.75 4.36C18.77 6.56 18.77 9.61 16.75 11.63L15.07 9.94C15.91 8.76 15.91 7.23 15.07 6.05L16.75 4.36M20.06 1C24 5.05 23.96 11.11 20.06 15L18.43 13.37C21.2 10.19 21.2 5.65 18.43 2.63L20.06 1M9 4C11.2 4 13 5.79 13 8S11.2 12 9 12 5 10.21 5 8 6.79 4 9 4M13 14.54C13 15.6 12.71 18.07 10.8 20.83L10 16L10.93 14.12C10.31 14.05 9.66 14 9 14S7.67 14.05 7.05 14.12L8 16L7.18 20.83C5.27 18.07 5 15.6 5 14.54C2.6 15.24 .994 16.5 .994 18V22H17V18C17 16.5 15.39 15.24 13 14.54Z" /></svg>
              </div>
            </div>

            <div class="button-wrapper">
              <button class="btn outline">DETAILS</button>

            </div>
          </div>
        </Tilt>
      </div>



      <div>
        <div class="container">
          <div class="wrapper">
            <div class="banner-image">
              <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24"><title>account-file</title><path d="M7.5 5C9.43 5 11 6.57 11 8.5C11 10.43 9.43 12 7.5 12C5.57 12 4 10.43 4 8.5C4 6.57 5.57 5 7.5 5M1 19V16.5C1 14.57 4.46 13 7.5 13C8.68 13 9.92 13.24 11 13.64V19H1M22 19H14C13.45 19 13 18.55 13 18V6C13 5.45 13.45 5 14 5H19L23 9V18C23 18.55 22.55 19 22 19M18 10H21V9.83L18.17 7H18V10Z" /></svg>
            </div>
          </div>
          <div class="button-wrapper">
            <button class="btn outline">DETAILS</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
div{
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
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
div.container{
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
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 2.4rem;
}
p {
  color: #fff;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 0.8rem;
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
</style>
