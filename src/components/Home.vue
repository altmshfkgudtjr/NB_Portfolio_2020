<template>
	<transition name="top">
		<div class="home_wrap">
			<div id="home_first" class="home">
				<div class="intro">
					<div class="intro_top noselect">
						<span style="font-weight: bold;">#</span> is a connection.<br>
						Between Developer and Client.
					</div>
					<a href="#home_second" class="scroll_button">
						<
						<span class="scroll_line"></span>
						SCROLL
					</a>
					<div class="intro_main">
						<span id="intro_right_line" class="intro_right_line intro_right_line01"></span>
						<span class="intro_right_item">#</span>
						<transition name="introList" mode="out-in">
							<div v-if="showing" class="intro_item" key="one">
								<div class="intro_item_word">Developer.</div>
								<div class="intro_item_word">NB</div>
							</div>
							<div v-if="!showing" class="intro_item" key="two">
								<div class="intro_item_word">Welocme to</div>
								<div class="intro_item_word">My Portfolio</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
			<div id="home_second" class="home">
				
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
</style>