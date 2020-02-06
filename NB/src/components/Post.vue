<template>
	<transition name="modalBackgroundMove">
		<div class="modal_background">
			<div class="modal_close_btn" v-on:click="Close_Post"></div>
			<div class="modal">
				
			</div>
		</div>
	</transition>
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
		created() {
			eventBus.$on("PostOn", function(targetNum) {
				axios.get('http://localhost:3000/projects/view/'+targetNum).then((response)=>{
  					if (response.status === 200)
  						if (response.data['result'] == "success") {
  							console.log(response.data['data']);
  						} else {
  							alert("Server is Stopped.");
  						}
    			});
			});
		},
		methods: {
			Close_Post: function() {
				eventBus.$emit('PostClose');
				document.querySelector('body').removeAttribute('style');
			}
		}
	}
</script>

<style lang="scss">
	.modal {
		position: fixed;
		width: 90%;
		height: 100%;
		box-sizing: border-box;
		border-radius: 40px 0 0 40px;
		background-color: white;
		box-shadow: 0px 30px 50px rgba(0,0,0,.3);
		z-index: 200;
		overflow-y: auto;
		right: 0;
		top: 0;
	}
	.modal_close_btn {
		position: fixed;
		width: 10%;
		height: 100%;
		box-sizing: border-box;
		background-color: rgba(0,0,0,0);
		z-index: 200;
		left: 0;
		top: 0;
	}
	.modal_background {
		position: fixed;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-color: rgba(0,0,0,0);
		z-index: 100;
		top: 0;
		left: 0;
	}
	.modalMove-enter-active, .modalMove-leave-active {
		transition: all .6s cubic-bezier(0.59, 0.13, 0.13, 1.01);
	}
	.modalMove-enter {
		transform: translateX(0);
	}
	.modalMove-leave-to {
		transform: translateX(100%);
	}
	.modalBackgroundMove-enter-active, .modalBackgroundMove-leave-active {
		transition: all .6s cubic-bezier(0.59, 0.13, 0.13, 1.01);
	}
	.modalBackgroundMove-enter, .modalBackgroundMove-leave-to {
		opacity: 0;
		transform: translateX(100%);
	}
</style>