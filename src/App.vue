<template>
  <div id="app">
    <loading></loading>
    <headerDiv v-show="top"></headerDiv>
  </div>
</template>


<script>
	import loading from "./components/Loading.vue"
	import headerDiv from "./components/header.vue"
	import Vue from "vue"
	export const eventBus = new Vue();
	let IsHeader;
	export default {
		name: 'app',
		components: {
			'loading': loading,
			'headerDiv': headerDiv
		},
		data() {
			return {
				top: true
			};
		},
		created() {
			this.top = false;
			eventBus.$on("loadingDone", () => {
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

.noselect {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-selecti: none;
}

html, body {
	height: 100%;
	background-color: white;
	padding: 0;
	margin: 0;
}
body {
	position: relative;
	height: 100%;
}

</style>
