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
							Flask, Node.js</div>
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
				<img src="../assets/images/picture.jpg" class="skill_img">
			</div>
			<div id="home_fourth" class="home">
				<div id="project_box" class="project_box">
					<div class="box_title">PORTFOLIO & EXPERIENCE</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
					<div class="project_item" data-aos="zoom-in" data-aos-duration="1000">
						<div class="project_img_box">
							<div class="project_img"></div>
						</div>
						<div class="project_title">테스트 제목입니다.</div>
						<div class="project_subtitle">SOOJLE FRONT-END & CRALWER DEVELOPER</div>
					</div>
				</div>
				<div class="view_more_posts">
					<div class="view_more_posts_btn" v-on:click="More_Posts">
						<span>VIEW</span>
						<div class="btn_line"></div>
						<span>MORE POSTS</span>
					</div>
				</div>
			</div>
			<div id="home_fifth" class="home">
				<div class="awards_title noselect">AWARDS</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					2rd Sejong Uni. Computer Engineering Academic Seminar
					<div class="award_date">December, 13 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					4th Sejong University Campus Town Revitalization Idea Competition
					<div class="award_date">December, 11 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					2nd class Sejong Algorithm Coding Challenge
					<div class="award_date">December, 4 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					3rd 8th Creative Design Contest
					<div class="award_date">December, 4 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					4th Sejong Entrepreneurship Idea Festival
					<div class="award_date">November, 18 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					1st 2019 Sejong AI Idea Contest
					<div class="award_date">October, 11 2019</div>
				</div>
				<div class="award_item"><i class="fas fa-trophy"></i>
					1st Sejong Software Convergence Contest
					<div class="award_date">September, 30 2019</div>
				</div>
			</div>
			<div id="home_sixth" class="home">
				<div class="contact_title noselect">CONTACT ME
				</div><div class="contact_info">
					<div class="contact_info_wrap noselect" v-on:click="Go_Home">
						<i class="fas fa-map-marker-alt"></i>
						<div class="contact_info_item">Gwangjin-gu, Seoul</div>
					</div>
					<div class="contact_info_wrap" v-on:click="Go_College">
						<i class="fas fa-university"></i>
						<div class="contact_info_item">Sejong University</div>
					</div>
					<div class="contact_info_wrap"  v-on:click="Go_email">
						<i class="far fa-envelope"></i>
						<div class="contact_info_item">altmshfkgudtjr@naver.com</div>
					</div>
					<div class="contact_info_wrap" v-on:click="Go_git">
						<i class="fab fa-github"></i>
						<div class="contact_info_item">Github</div>
					</div>
					<div class="contact_info_wrap" v-on:click="Go_blog">
						<i class="far fa-keyboard"></i>
						<div class="contact_info_item">Blog</div>
					</div>
					<div class="contact_info_wrap" v-on:click="Go_instagram">
						<i class="fab fa-instagram"></i>
						<div class="contact_info_item">Instagram</div>
					</div>
				</div>
				<div class="copyright">
					<p>© COPYRIGHTS <span class="NB">NB</span>. ALL RIGHTS RESERVED.</p>
					<p>This Website Designed by <span class="NB">NB</span>.</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from "vue"
	import { eventBus } from "../App.vue"
	var logo_black = true;
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
			window.addEventListener('scroll', this.Logo_color)
		},
		methods: {
			Go_second: ()=> {
				let height = document.getElementById('home_second').offsetTop;
				window.scrollTo(0, height);
			},
			Logo_color: () => {
				// Change to white
				if (window.pageYOffset >= document.getElementById('home_sixth').offsetTop && !logo_black) {
					eventBus.$emit('logoColorChange');
					logo_black = !logo_black;
				} // Change to White
				else if (window.pageYOffset >= document.getElementById('home_fifth').offsetTop && !logo_black && window.pageYOffset < document.getElementById('home_sixth').offsetTop) {
					eventBus.$emit('logoColorChange');
					logo_black = !logo_black;
				} // Change to Black
				else if (window.pageYOffset >= document.getElementById('home_fourth').offsetTop && logo_black && window.pageYOffset < document.getElementById('home_fifth').offsetTop) {
					eventBus.$emit('logoColorChange');
					logo_black = !logo_black;
				} // Change to White 
				else if (window.pageYOffset < document.getElementById('home_fourth').offsetTop && !logo_black) {
					eventBus.$emit('logoColorChange');
					logo_black = !logo_black;
				}
			},
			More_Posts: () => {
				console.log("Give Me a Post!");
			},
			Go_Home: () => {
				window.open('https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B4%91%EC%A7%84%EA%B5%AC/@37.5463043,127.068361,14z/data=!3m1!4b1!4m5!3m4!1s0x357ca528f81c1909:0xa8f1a5f74974ff31!8m2!3d37.5384843!4d127.0822938?hl=ko', '_blank');
			},
			Go_College: () => {
				window.open('https://www.google.co.kr/maps/place/%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90/@37.5505084,127.0724845,18z/data=!4m12!1m6!3m5!1s0x357ca4d0720eecc1:0x1a7ad975c6b5e4eb!2z7IS47KKF64yA7ZWZ6rWQ!8m2!3d37.5502596!4d127.073139!3m4!1s0x357ca4d0720eecc1:0x1a7ad975c6b5e4eb!8m2!3d37.5502596!4d127.073139?hl=ko', '_blank');
			},
			Go_email: ()=> {
				window.open('mailto:altmshfkgudtjr@naver.com', '_blank');
			},
			Go_git: ()=> {
				window.open('https://github.com/altmshfkgudtjr', '_blank');
			},
			Go_blog: ()=> {
				window.open('https://blog.naver.com/altmshfkgudtjr', '_blank');
			},
			Go_instagram: ()=> {
				window.open('https://www.instagram.com/brother_rock999/', '_blank');
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
		padding: 10% 5% 0 5%;
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
		height: auto;
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
		margin-bottom: 300px;
		h1 {
			color: #adadad;
			margin-bottom: 0;
		}
	}
	@media screen and (max-width: 500px) {
		.skill_box {
			margin-bottom: 100px;
		}
	}
	.box_title {
		position:relative;
		width: 100%;
		color: white;
		font-weight: bold;
		margin-bottom: 100px;
		font-size: 20px;
	}
	@media screen and (max-width: 500px) {
		.box_title {
			margin-bottom: 50px;
		}
	}
	.project_box {
		position: relative;
		width: 100%;
		height: auto;
		padding: 0 5%;
		box-sizing: border-box;
		display: flex;
 		justify-content: space-between;
 		flex-wrap: wrap;
	}
	.project_item {
		position: relative;
		color: #fff;
		border-radius: 5px;
		flex-basis: 30%;
		margin-bottom: 120px;
		cursor: pointer;
	}
	@media screen and (max-width: 500px) {
		.project_item {
			flex-basis: 45%;
			margin-bottom: 60px;
		}
	}
	.project_img_box {
		position:relative;
		width: 100%;
		height: auto;
		margin-bottom: 20px;
		transition: .7s ease-out;
		overflow: hidden;
		transform-origin: center;
		&:hover {
			transform: scale(0.95);
		}
	}
	.project_img {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url("../assets/images/picture.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: .4s ease-out;
		transform-origin: center;
		&:after {
			content: '';
			display: block;
			padding-bottom: 100%;
		}
		&:hover {
			transform: scale(1.2);
		}
	}
	.project_title {
		position: relative;
		font-size: 22px;
		color: white;
		line-height: 40px;
		&:hover {
			text-decoration: underline;
			text-underline-position: under;
		}
	}
	.project_subtitle {
		position: relative;
		font-size: 18px;
		color: rgba(255, 255, 255, .6);
		&:hover {
			color: white;
		}
	}
	@media screen and (max-width: 500px) {
		.project_img_box {
			margin-bottom: 10px;
		}
		.project_title {
			font-size: 16px;
			line-height: 30px;
		}
		.project_subtitle {
			font-size: 12px;
			line-height: 18px;
		}
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
		transition: .2s cubic-bezier(0.65, 0, 0.17, 0.98);;
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
		transition: .2s cubic-bezier(0.65, 0, 0.17, 0.98);;
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

	.skill_img {
		position: absolute;
		width: 30vw;
		height: auto;
		//filter: grayscale(100);
		right: 5%;
		top: 3vw;
		outline: 10px solid black;
    	padding: 10px;
	}
	@media screen and (orientation:portrait) {
		.skill_img {
			top: 25vw;
		}
	}
	@media screen and (max-width: 1000px) {
		.skill_img {
			display: none;
		}
	}

	.view_more_posts {
		position: relative;
		font-size: 20px;
		color: white;
		text-align: right;
		margin-right: 5%;
	}
	.view_more_posts_btn {
		cursor: pointer;
	}
	.btn_line {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 2px;
		margin: 0 2px 5px 2px;
		background-color: white;
		transition: .7s cubic-bezier(0.65, 0, 0.17, 0.98);
	}
	.view_more_posts_btn:hover > .btn_line {
		width: 0;
	}

	.awards_title {
		position: relative;
		text-align: center;
		font-size: 3em;
		line-height: 1.2;
		font-weight: bold;
		padding-top: 50px;
		padding-bottom: 100px;
	}
	.award_item {
		position: relative;
		text-align: center;
		font-size: 1.2em;
		line-height: 3;
		color: #404040;
		font-weight: bold;
		& > i {
			font-size: .9em;
		}
	}
	.award_date {
		display: inline-block;
		font-weight: normal;
		color: #adadad;
	}
	#home_fifth {
		padding-bottom: 140px;
		height: auto;
	}
	@media screen and (max-width: 500px) {
		#home_fifth {
			padding-top: 50px;
			padding-bottom: 50px;
		}
		.awards_title {
			font-size: 2em;
			padding-bottom: 60px;
		}
		.award_item {
			font-size: .8em;
			text-align: left;
			margin-left: 5%;
		}
	}
	#home_sixth {
		background-color: #dbdbdb;
		padding-bottom: 140px;
		height: auto;
	}
	.contact_title {
		position: relative;
		display: inline-block;
		width: 50%;
		font-size: 3vw;
		padding-left: 15%;
		box-sizing: border-box;
		float: left;
	}
	.contact_info {
		position: relative;
		display: inline-block;
		width: 50%;
		font-size: 1.5em;
		padding-right: 5%;
		padding-top: 10px;
		box-sizing: border-box;
		line-height: 2;
	}
	.contact_info_wrap {
		position: relative;
	}
	.contact_info_item {
		position: relative;
		display: inline-block;
		width: auto;
		font-size: 1.5rem;
		line-height: 2;
		transition: .4s cubic-bezier(0.65, 0, 0.17, 0.98);;
		margin-bottom: 20px;
		cursor: pointer;
	}
	.contact_info_item:after {
		position: absolute;
		content: '';
		width: 0;
		height: 2px;
		background-color: black;
		left: 0;
		bottom: 0;
		transition: .4s cubic-bezier(0.65, 0, 0.17, 0.98);;
	}
	.contact_info_item:hover:after {
		width: 100%;
	};
	.copyright {
		position: relative;
		font-size: 1em;
		margin-top: 50px;
		line-height: 2;
		padding-left: 15%;
		box-sizing: border-box;
		font-weight: bold;
	}
	.NB {
		color: #adadad;
	}
	@media screen and (max-width: 500px) {
		#home_sixth {
			padding-top: 60px;
			padding-bottom: 60px;
		}
		.contact_title  {
			padding-left: 0;
			font-size: 2em;
			width: 100%;
			text-align: center;
			margin-bottom: 20px;
		}
		.contact_info {
			width: 100%;
			padding-top: 0;
			font-size: 1.2em;
			padding-left: 5%;
		}
		.contact_info_item {
			font-size: 1em;
		}
	}
</style>