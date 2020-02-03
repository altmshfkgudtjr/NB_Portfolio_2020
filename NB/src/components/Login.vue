<template>
	<div>
		드루와
		<button v-on:click="Go_Logout">로그아웃</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vue from "vue"
	import { eventBus } from "../App.vue"

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			Go_Logout: () => {
				eventBus.$emit("ByeLogin");
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>