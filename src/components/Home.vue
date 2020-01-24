<template>
	<transition name="top">
		<div class="home_wrap">
			<div id="home_first" class="home">
				<div class="intro">
					<div class="intro_top noselect">
						<span style="font-weight: bold;">#</span> is a connection.<br>
						Between Developer and Client.
					</div>
					<div class="scroll_button" v-on:click="Go_second">
						<
						<span class="scroll_line"></span>
						SCROLL
					</div>
					<div class="intro_main">
						<span id="intro_right_line" class="intro_right_line intro_right_line01"></span>
						<span class="intro_right_item">#</span>
						<transition name="introList" mode="out-in">
							<div v-if="showing" class="intro_item noselect" key="one">
								<div class="intro_item_word">Developer.</div>
								<div class="intro_item_word">NB</div>
							</div>
							<div v-if="!showing" class="intro_item noselect" key="two">
								<div class="intro_item_word">Welocme to</div>
								<div class="intro_item_word">My Portfolio</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
			<div id="home_second" class="home">
				<div class="img_background"></div>
				<img src="../assets/images/Myself.jpg" class="my_img" data-aos="zoom-out-right"  data-aos-duration="1500">
				<div class="introduce_wrap" data-aos="fade-up" data-aos-duration="1000">
					<h2>Hi! I'm NB</h2>
					I have been in computer engineering department of Sejong University since 2016. This is my portfolio page that includes my career. For more detailed projects, see <a href="https://github.com/altmshfkgudtjr" target="_blank" class="introduce_a">Github</a> or <a href="https://blog.naver.com/altmshfkgudtjr" target="_blank" class="introduce_a">Blog</a>. Thank you!
				</div>
			</div>
			<div id="home_third" class="home" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
				<div class="skill_box noselect">
					<h1>SKILLS</h1>
					<div class="skill_wrap">
						<div class="skill_category"><i class="fas fa-code"></i>
							APPLICATION</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Web Crawling in Python & R</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Android in Kotlin</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							More Application in C++, Python, Java, etc</div>
					</div>
					<div>
						<div class="skill_category"><i class="fas fa-hashtag"></i>
							FRONT-END</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							HTML5, CSS3, SASS</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Javscript, Jquery</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Bootstrap, Vue.JS</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Adobe(CS, XD)</div>
					</div>
					<div>
						<div class="skill_category"><i class="fas fa-code-branch"></i>
							BACK-END</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Flask</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							Wsgi, NginX</div>
					</div>
					<div>
						<div class="skill_category"><i class="fas fa-database"></i>
							DATABASE</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							RDBMS(MySQL)</div>
						<div class="skill_item"><i class="far fa-check-square"></i>
							NoSQL(MongoDB)</div>
					</div>
				</div>
			</div>
			<div id="home_fourth" class="home">
				<div class="project_box">
					<div class="box_title">PORTFOLIO</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from "vue"
	import { eventBus } from "../App.vue"
	export default {
		data() {
			return {
				showing: true
			}
		},
		mounted() {
			let introAnimation = setInterval(()=> {
				this.showing = !this.showing;
				if (document.getElementById("intro_right_line").classList.contains("intro_right_line01")){
					setTimeout(function() {
						document.getElementById("intro_right_line").classList.toggle("intro_right_line02");
						document.getElementById("intro_right_line").classList.toggle("intro_right_line01");
					}, 1000);
				}
				else {
					setTimeout(function() {
						document.getElementById("intro_right_line").classList.toggle("intro_right_line01");
						document.getElementById("intro_right_line").classList.toggle("intro_right_line02");
					
					}, 1000);
				}
			}, 5000);
		},
		methods: {
			Go_second: function() {
				let height = document.getElementById('home_second').offsetTop;
				window.scrollTo(0, height);
			}
		}
	};
</script>

<style scoped lang="scss">
	@font-face {
		font-family: 'poppin';
		src: url('../assets/fonts/Poppins-Light.ttf') format('truetype');
	}

	.top-enter-active, .top-leave-active {
		transition: opacity .5s;
	}
	.top-enter, .top-leave-to {
		opacity: 0;
	}
	.introList-enter-active {
		transition: all .5s;
	}
	.introList-leave-active {
		transition: all 1s;
	}
	.introList-enter, .introList-leave-to {
		opacity: 0;
		transform: translateX(-200px);
	}

	.home_wrap {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.home {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 140px;
	}
	.intro {
		position: relative;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 10% 120px 10%;
	}
	.intro_top {
		font-family: 'poppin';
		position: relative;
		width: 100%;
		height: auto;
		padding-bottom: 10%;
		font-size: 1vw;
		letter-spacing: -0.2px;
		line-height: 1.5;
	}
	.intro_main {
		position: absolute;
		bottom: 80px;
		font-size: 8vw;
		letter-spacing: -0.3vw;
		line-height: 1.3;
		width: 80%;
		font-weight: bold;
	}
	.intro_item {
		position: relative;
		top: 0;
		left: 0;
	}
	.intro_item_word {
		position: relative;
	}
	.intro_right_item {
		position: absolute;
		top: 0;
		right: 10%;
		line-height: 1.5;
	}
	.intro_right_line {
		position: absolute;
		width: 25%;
		height: 6px;
		top: 25%;
		background-color: black;
		left: auto;
		right: 23%;
		transition: .7s cubic-bezier(0.215, 0.61, 0.355, 1);
		&01 {
			width: 25%;
		}
		&02 {
			width: 15%;
		}
	}
	@media screen and (max-width: 500px) {
		.intro_right_item {
			right: 0;
		}
		.intro_right_line {
			right: 13%;
			height: 2px;

			&01 {
				width: 35%;
			}
			&02 {
				width: 25%;
			}
		}
	}

	.scroll_button {
		position: absolute;
		font-size: 14px;
		cursor: pointer;
		padding-top: 10px;
		padding-bottom: 10px;
		transform-origin: right bottom;
		transform: rotate(-90deg);
		color: #000;
		z-index: 100;
		transition: 0.3s cubic-bezier(0.65, 0, 0.17, 0.98);
		right: 4%;
		bottom: 220px;
		letter-spacing: 0;
		text-decoration: none;
	}
	@media screen and (max-width: 500px) {
		.scroll_button {
			display: none;
		}
	}
	.scroll_line {
		width: 90px;
		height: 2px;
		display: inline-block;
		background: #000;
		position: relative;
		top: -4px;
		left: -10px;
		transition: 0.3s cubic-bezier(0.65, 0, 0.17, 0.98);
	}
	.scroll_button:hover .scroll_line {
		width: 50px;
	}

	.img_background {
		position: absolute;
		width: 50%;
		height: 10vw;
		min-height: 100px;
		left: 0;
		top: 25%;
		background-color: #bfbfbf;
	}
	.my_img {
		position: absolute;
		width: 20vw;
		min-width: 250px;
		height: auto;
		object-fit: cover;
		left: 23vw;
		top: 18%;
		outline: 10px solid black;
    	padding: 10px;
    	z-index: 20;
	}
	.introduce_wrap {
		font-family: "poppin";
		position: absolute;
		width: 50%;
		height: auto;
		min-height: 50%;
		right: 0;
		bottom: 0;
		margin-bottom: 10%;
		font-size: 1.5rem;
		line-height: 30px;
		box-sizing: border-box;
		padding: 10% 3% 0 5%;
		color: #585858;
		word-break: keep-all;
		h2 {
			color: black;
		}
	}
	@media screen and (orientation:portrait) {
		.img_background {
			width: 70%;
		}
		.my_img {
			width: 30vh;
			z-index: 0;
		}
		.introduce_wrap {
			width: 100%;
			min-height: 40%;
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 500px) {
		.img_background {
			width: 80%;
			height: 30vw;
		}
		.my_img {
			position: absolute;
			width: 20vw;
			min-width: 200px;
			height: auto;
			object-fit: cover;
			left: 10vw;
			top: 28vw;
			z-index: 0;
		}
		.introduce_wrap {
			font-size: 16px;
			line-height: 26px;
			padding: 0% 5% 0 5%;
		}
	}
	@media screen and (orientation:portrait) and (max-width: 350px) {
		.my_img {
			top: 8vw;
		}
	}
	.introduce_a {
		color: black;
		font-weight: bold;
		text-decoration: none;
	}
	#home_third {
		padding-top: 0;
	}

	#home_fourth {
		background-color: black;
		height: auto;
		margin-top: 50px;
		padding-bottom: 120px;
	}
	@media screen and (max-width: 500px) {
		#home_fourth {
			margin-top: 100px;

		}
	}
	.skill_box {
		position: relative;
		width: 100%;
		height: auto;
		padding: 0 5%;
		box-sizing: border-box;
		h1 {
			color: #adadad;
			margin-bottom: 0;
		}
	}
	.project_box {
		position: relative;
		width: 100%;
		height: auto;
		padding: 0 5%;
		box-sizing: border-box;
	}
	.box_title {
		color: white;
		font-weight: bold;
		margin-bottom: 100px;
		font-size: 20px;
	}
	.skill_wrap {
		margin-bottom: 10px;
	}
	.skill_category {
		position: relative;
		display: inline-block;
		width: auto;
		font-size: 2rem;
		font-weight: bold;
		transition: .2s ease-in-out;
		margin-bottom: 5px;
	}
	.skill_category:after {
		position: absolute;
		content: '';
		width: 0;
		height: 2px;
		background-color: black;
		left: 0;
		bottom: 0;
		transition: .2s ease-in-out;
	}
	.skill_category:hover:after {
		width: 100%;
	};
	.skill_item {
		position:relative;
		margin-left: 3rem;
		font-size: 1.5rem;
		line-height: 1.2;
		color: #838383;
	}
	@media screen and (max-width: 500px) {
		.skill_category {
			font-size: 1.5rem;
		}
		.skill_item {
			font-size: 1rem;
		}
	}
</style>