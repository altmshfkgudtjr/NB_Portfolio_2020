<template>
  <div id="app">
    <loading></loading>
    <headerDiv v-show="top"></headerDiv>
    <Home id="home" v-show="top"></Home>
    <Login v-show="top_login"></Login>
    <Admin v-show="top_admin"></Admin>
    <Post v-show="top_modal"></Post>
  </div>
</template>


<script>
	import loading from "./components/Loading.vue"
	import headerDiv from "./components/header.vue"
	import Home from "./components/Home.vue"
	import Login from "./components/Login.vue"
	import Admin from "./components/Admin.vue"
	import Post from "./components/Post.vue"
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
			"Login": Login,
			"Admin": Admin,
			"Post": Post
		},
		data() {
			return {
				top: true,
				top_login: false,
				top_admin: false,
				top_modal: false
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
			eventBus.$on("SuccessLogin", () => {
				this.top_login = false;
				this.top_admin = true;
			});
			eventBus.$on("PostOn", (targetNum) => {
				this.top_modal = true;
			});
			eventBus.$on("PostClose", () => {
				this.top_modal = false;
			})
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
body::-webkit-scrollbar {
    display: none;
}
html {
	scroll-behavior: smooth;
}
body {
	position: relative;
	height: 100%;
}

</style>
