<template>
  <div id="app">
    <loading></loading>
    <headerDiv v-show="top"></headerDiv>
    <Home id="home" v-show="top"></Home>
    <Login v-show="top_login"></Login>
  </div>
</template>


<script>
	import loading from "./components/Loading.vue"
	import headerDiv from "./components/header.vue"
	import Home from "./components/Home.vue"
	import Login from "./components/Login.vue"
	import Vue from "vue"
	import axios from 'axios'

	export const eventBus = new Vue();
	let IsHeader;
	export default {
		name: 'app',
		components: {
			'loading': loading,
			'headerDiv': headerDiv,
			'Home': Home,
			"Login": Login
		},
		data() {
			return {
				top: true,
				top_login: false
			};
		},
		created() {
			this.top = false;
			eventBus.$on("loadingDone", () => {
				this.top = true;
			});
			eventBus.$on("GoLogin", () => {
				this.top = false;
				this.top_login = true;
			});
			eventBus.$on("ByeLogin", () => {
				this.top_login = false;
				this.top = true;
			});
		}
	}
</script>


<style>
@font-face {
	font-family: 'poppin';
	src: url('/assets/fonts/Poppins-Light.ttf') format('trutype');
	font-weight: 300;
}

* {
	font-family: "poppin", 'sans-serif';
}

/*Drag Color Changed*/
::selection {
    background:#adadad;
    color: #FFF;
    text-shadow: none;
}
::-moz-selection {
    background:#adadad;
    color: #FFF;
    text-shadow: none;
}
::-webkit-selection {
    background:#adadad;
    color: #FFF;
    text-shadow: none;
}

.noselect {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-selecti: none;
}

html, body, #app {
	height: 100%;
	background-color: white;
	padding: 0;
	margin: 0;
}
html {
	scroll-behavior: smooth;
}
body {
	position: relative;
	height: 100%;
}

</style>
