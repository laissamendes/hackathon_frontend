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
              <h1></h1>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
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
              <h1>Ocorrências</h1>
              <div class="banner-image">
                <svg xmlns="http://www.w3.org/2000/svg" class="cardback" viewBox="0 0 24 24">
                  <title>alert-circle</title>
                  <path
                    d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </div>
            </div>

            <div class="button-wrapper">
              <button class="btn outline">DETAILS</button>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  </div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
