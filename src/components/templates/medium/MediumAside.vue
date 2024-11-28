<script>
</script>
<template>
	<div style="z-index: 1000;" class=" h-screen w-screen flex static">
		<!-- container -->

		<aside style="z-index: 1000;" class="flex flex-col items-center bg-white text-gray-700 shadow h-full">
			<!-- Side Nav Bar-->
			<router-link to="/landing">
        <div class="h-16 flex items-center w-full">
			<!-- Logo Section -->
			<a class="h-45 w-45 " href="">
				<img
					class="h-20 w-18 "
					src="../../../assets/img/logo.jpg"
					alt="svelte logo" />
			</a>
		</div>
		</router-link>


			<ul>
				<!-- Items Section -->
				<li class="h-16 px-6 flex flex justify-center items-center w-full
				focus:text-orange-500 hover:bg-gray-100">
				    <router-link to="/about">
					<a href="/about" role="button" class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500 button button__link">
				    
					
						<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round">
							<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
							<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
							0-1.79 1.11z"></path>
						</svg>

					</a>
				    </router-link>

				</li>
				<li class="hover:bg-gray-100">
					<div class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500" >
						<a href="#modal" role="button" class="button button__link">Modal </a>
					</div>
				</li>

				<div class="modal-wrapper" id="modal">
					
					<div class="login-wrap">

						<div class="wrapper">
							
							<div class="title">
								Login Form
							</div>
							<a href="#!" role="button" class="close checkbox" style="justify-content: center; align-items: center; border-radius: 20px; position: relative;  width: 50px; height: 50px; z-index: 100000; background-color: white;" aria-label="close this modal"> X </a>
							<form action="#">
								<div class="field">
									<input type="text" required>
									<label>Email Address</label>
								</div>
								<div class="field">
									<input type="password" required>
									<label>Password</label>
								</div>
								<div class="content">
									<div class="checkbox">
										<input type="checkbox" id="remember-me">
										<label for="remember-me">Remember me</label>
									</div>
									<div class="pass-link">
										<a href="#">Forgot password?</a>
									</div>
								</div>
								<div class="field">
									<input type="submit" value="Login">
								</div>
								<div class="signup-link">
									Not a member? <a href="#">Signup now</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<li class="hover:bg-gray-100">
					<router-link to="/" class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					Loja
				    </router-link>
				</li>

				
				
				<li class="hover:bg-gray-100">
					<router-link to="/landing" class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					Home
				</router-link>
				</li>
			    

				<li class="hover:bg-gray-100">
					<a href="." class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
						<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="3"></circle>
							<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"></path>
						</svg>
					</a>
				</li>

				<li class="hover:bg-gray-100">
					<a href="." class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
						<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
							stroke-linecap="round" stroke-linejoin="round">
							<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
							<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
						</svg>
					</a>
				</li>

			</ul>

			<div class="mt-auto h-16 flex items-center w-full">
				<!-- Action Section -->
				<router-link to="/logout" class="h-16 w-10 mx-auto flex flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
					<svg class="h-5 w-5 text-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round">
						<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
						<polyline points="16 17 21 12 16 7"></polyline>
						<line x1="21" y1="12" x2="9" y2="12"></line>
					</svg>

				</router-link>
			</div>

		</aside>
	</div>
</template>

<style scoped lang="scss">
.hover:hover{
	background-color: gray
	
}
.wrapper .title {
	font-size: 35px;
	font-weight: 600;
	text-align: center;
	line-height: 100px;
	color: #fff;
	user-select: none;
	border-radius: 15px 15px 0 0;
	background: linear-gradient(-135deg, #c850c0, #4158d0);
}

.wrapper form {
	padding: 10px 30px 50px 30px;
}

.wrapper form .field {
	height: 50px;
	width: 100%;
	margin-top: 20px;
	position: relative;
}

.wrapper form .field input {
	height: 100%;
	width: 100%;
	outline: none;
	font-size: 17px;
	padding-left: 20px;
	border: 1px solid lightgrey;
	border-radius: 25px;
	transition: all 0.3s ease;
}

.wrapper form .field input:focus,
form .field input:valid {
	border-color: #4158d0;
}

.wrapper form .field label {
	position: absolute;
	top: 50%;
	left: 20px;
	color: #999999;
	font-weight: 400;
	font-size: 17px;
	pointer-events: none;
	transform: translateY(-50%);
	transition: all 0.3s ease;
}

form .field input:focus~label,
form .field input:valid~label {
	top: 0%;
	font-size: 16px;
	color: #4158d0;
	background: #fff;
	transform: translateY(-50%);
}

form .content {
	display: flex;
	width: 100%;
	height: 50px;
	font-size: 16px;
	align-items: center;
	justify-content: space-around;
}

form .content .checkbox {
	display: flex;
	align-items: center;
	justify-content: center;
}

form .content input {
	width: 15px;
	height: 15px;
	background: red;
}

form .content label {
	color: #262626;
	user-select: none;
	padding-left: 5px;
}

form .content .pass-link {
	color: "";
}

form .field input[type="submit"] {
	color: #fff;
	border: none;
	padding-left: 0;
	margin-top: -10px;
	font-size: 20px;
	font-weight: 500;
	cursor: pointer;
	background: linear-gradient(-135deg, #c850c0, #4158d0);
	transition: all 0.3s ease;
}

form .field input[type="submit"]:active {
	transform: scale(0.95);
}

form .signup-link {
	color: #262626;
	margin-top: 20px;
	text-align: center;
}

form .pass-link a,
form .signup-link a {
	color: #4158d0;
	text-decoration: none;
}

form .pass-link a:hover,
form .signup-link a:hover {
	text-decoration: underline;
}

body {
	place-items: center;
	margin: 0;
	color: #6a6f8c;
	background: #c8c8c8;
	font: 600 16px/18px 'Open Sans', sans-serif;
}

*,
:after,
:before {
	box-sizing: border-box
}


.hr {
	height: 2px;
	margin: 60px 0 50px 0;
	background: rgba(255, 255, 255, .2);
}

.foot-lnk {
	text-align: center;
}

.static {
	position: fixed;
}

.modal-header {
	align-items: baseline;
	display: flex;
	justify-content: space-between;
}

.close {
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	height: 16px;
	text-decoration: none;
	width: 16px;

	svg {
		width: 16px;
	}
}

.modal-wrapper {
	align-items: center;

	background: rgba(0, 0, 0, 0.7);
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
}

#modal {
	opacity: 0;

	visibility: hidden;

	&:target {
		opacity: 1;
		visibility: visible;

		.modal-body {
			opacity: 1;
			transform: translateY(1);
		}
	}

	.modal-body {
		max-width: 500px;
		opacity: 0;
		transform: translateY(-100px);

		width: 100%;
		z-index: 1;
	}
}

.outside-trigger {
	bottom: 0;
	cursor: default;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
}

.button__link {
	text-decoration: none;
}

.main {
	width: 350px;
	height: 500px;
	background: red;
	overflow: hidden;
	background: url("https://img.freepik.com/premium-vector/abstract-realistic-technology-particle-background_23-2148414765.jpg?w=740") no-repeat center/ cover;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}

#chk {
	display: none;
}

.signup {
	position: relative;
	width: 100%;
	height: 100%;
}

label {
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}

input {
	width: 60%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}

button {
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;

	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}

button:hover {
	background: #6d44b8;
}

.login {
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}

.login label {
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked~.login {
	transform: translateY(-500px);
}

#chk:checked~.login label {
	transform: scale(1);
}

#chk:checked~.signup label {
	transform: scale(.6);
}
</style>
