<template>
	<transition name="top">
		<div class="header">
			<a href="/" v-show="logo[0]" class="logo_box"><img src="../assets/images/NBlog_black.png" class="logo"></a>
			<a href="/" v-show="logo[1]" class="logo_box"><img src="../assets/images/NBlog_white.png" class="logo"></a>
			<a href="/" v-show="logo[2]" class="logo_box"><img src="../assets/images/NB_black.png" class="logo"></a>
			<a href="/" v-show="logo[3]" class="logo_box"><img src="../assets/images/NB_white.png" class="logo"></a>
			<div class="menu">
				<div class="menu_item hover-shadow" v-on:click="Go_Home">
					HOME
				</div><div class="menu_item hover-shadow" v-on:click="Go_Work">
					WORK
				</div><div class="menu_item hover-shadow" v-on:click="Go_Contact">
					CONTACT
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { eventBus } from "../App.vue"
	var smallDisplay = false;	// Now Screen Width Boolean
	export default {
		data() {
			return {
				// Full_Black, Full_White, Short_Black, Short_White
				logo: [false, false, false, false]
			};
		},
		created() {
			this.logo[0] = true;
			// Event Call : eventBus.$emit("logoSizeChange");
			eventBus.$on("logoSizeChange", () => {
				let now = 0;
				for (let i = 0; i < this.logo.length; i++) {
					if (this.logo[i] == true) {
						now = i;
						this.logo[i] = !this.logo[i];
					}
				}
				if (now < 2) this.logo[now + 2] = !this.logo[now + 2];
				else this.logo[now - 2] = !this.logo[now - 2];
			});
			// Event Call : eventBus.$emit("logoColorChange");
			eventBus.$on("logoColorChange", () => {
				let now = 0;
				for (let i = 0; i < this.logo.length; i++) {
					if (this.logo[i] == true) {
						now = i;
						this.logo[i] = !this.logo[i];
					}
				}
				if (now%2==0) this.logo[now + 1] = !this.logo[now + 1];
				else this.log[now - 1] = !this.logo[now + 1];
			});
			window.addEventListener('resize', this.LogoChanging)
			this.LogoChanging();
		},
		methods: {
			// Screen Width Standard == 500px
			LogoChanging() {
				if (screen.width >= 500 && smallDisplay) {
					smallDisplay = false;
					eventBus.$emit("logoSizeChange");
				}
				if (screen.width < 500 && !smallDisplay) {
					smallDisplay = true;
					eventBus.$emit("logoSizeChange");
				}
			},
			Go_Home: ()=>{
				let height = document.getElementById('home_first').offsetTop;
				window.scrollTo(0, height);
			},
			Go_Work: ()=>{
				let height = document.getElementById('home_fourth').offsetTop;
				window.scrollTo(0, height);
			},
			Go_Contact: ()=>{

			}
		}
	}
</script>

<style scoped lang="scss">
	$silver: #c0c0c0;

	* {
		transition: 0.4s;
    	-webkit-transition: 0.4s;
    	-moz-transition: 0.4s;
    	-ms-transition: 0.4s;
    	-o-transition: 0.4s;
	}

	.header {
		position: fixed;
		width: 100%;
		height: 140px;
		padding: 45px 5%;
    	background-color: white;
    	box-sizing: border-box;
    	z-index: 10;
	}
	.logo_box {
		float: left;
		width: 25%;
		height: 50px;
	}
	.logo {
		position: relative;
		height: 50px;
		width: auto;
	}
	.menu {
		float: left;
		width: 75%;
		text-align: right;
	}
	.menu_item {
		position: relative;
		display: inline-block;
 		margin-right: 30px;
 		font-size: 20px;
 		line-height: 50px;
 		cursor: pointer;
 		transition: .2s;
	}
	.menu_item:last-child {
		margin-right: 0;
	}
	@media screen and (max-width: 500px) {
		.header {
			height: 70px;
			padding: 15px 5%;
		}
		.logo_box {
			height: 40px;
		}
		.logo {
			height: 40px;
		}
		.menu_item {
	 		margin-right: 20px;
	 		font-size: 14px;
	 		line-height: 40px;
	 		cursor: pointer;
	 		transition: .2s;
		}
	}

	.top-enter-active, .top-leave-active {
		transition: opacity .5s;
	}
	.top-enter, .top-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	@keyframes hover {
	    50% {
	        transform: translateY(-3px);
	    }
	
	    100% {
	        transform: translateY(-6px);
	    }
	}
	@keyframes hover-shadow {
    	0% {
    	    transform: translateY(6px);
    	    opacity: .4;
    	}
    	50% {
    	    transform: translateY(3px);
    	    opacity: 1;
    	}
    	100% {
    	    transform: translateY(6px);
    	    opacity: .4;
    	}
	}

	$defaultDuration: .5s;
	.hover-shadow {
		display: inline-block;
		position: relative;
		transition-duration: $defaultDuration;
		transition-property: transform;
		-webkit-transition-duration: .5s;
		-webkit-transition-property: transform;

		&:before {
	    	pointer-events: none;
	    	position: absolute;
	    	z-index: -1;
	    	content: '';
	    	top: 100%;
	    	left: 5%;
	    	height: 10px;
	    	width: 90%;
	    	opacity: 0;
	    	background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%); /* W3C */
	    	transition-duration: $defaultDuration;
	    	transition-property: transform opacity;
		}	

		&:hover {
			transform: translateY(-6px);
			animation-name: hover;
			animation-duration: 1.5s;
			animation-delay: $defaultDuration;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			animation-direction: alternate;

			&:before {
				opacity: .4;
				transform: translateY(6px);
				animation-name: hover-shadow;
				animation-duration: 1.5s;
				animation-delay: .3s;
				animation-timing-function: linear;
				animation-iteration-count: infinite;
				animation-direction: alternate;
			}
		}
	}
</style>