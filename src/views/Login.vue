<script setup >
import PreLoader from '@/components/PreLoader.vue';
import '@passageidentity/passage-elements/passage-auth';

</script>

<template>
  <PreLoader></PreLoader>
  <body>


	<div class="main reveal">
		<input type="checkbox" id="chk" aria-hidden="true">
			<div class="signup">
				<form>
          <passage-auth app-id="PhLcRqDh8OaDNxTAnC4KQcda"></passage-auth>
				</form>
			</div>


	</div>
</body>
</template>

<style scoped>
body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
  width: 100%;
	font-family: 'Jost', sans-serif;
	background-image: linear-gradient(10deg, rgb(151, 18, 240) 20%, rgba(85, 27, 35, 0.692) 100%);
  background-position: center;
  background-size: cover;
}

#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 50px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 10px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 12px;
	border: none;
	outline: none;
	border-radius: 5px;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	margin-top: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #6d44b8;
}
.login{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);
}
#chk:checked ~ .signup label{
	transform: scale(.6);
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
</style>
