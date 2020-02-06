<template>
	<transition name="modalBackgroundMove">
		<div class="modal_background">
			<div class="modal_close_btn" v-on:click="Close_Post"></div>
			<div class="modal">
				<div class="box">
					<img :src="img" class="post_image">
					<div class="post_box">
						<div class="title">{{ title }}</div>
						<div class="subtitle">{{ subtitle }}</div>
						<div class="post">{{ post }}</div>
						<div class="url" v-show="is_url">
							<span class="noselect">MORE.</span>
							<a :href="url" target="_blank"><div class="url_btn">{{ url }}</div></a>
						</div>
						<div class="writer noselect">By. <span>NB</span></div>
					</div>
				</div>
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
				img: "",
				title: "",
				subtitle: "",
				post: "",
				is_url: false,
				url: ""
			}
		},
		created() {
			// 여기서는 또 function() 이 아닌 Arrow function을 사용해야 this 사용 가능
			eventBus.$on("PostOn", (targetNum) => {
				axios.get('http://localhost:3000/projects/view/'+targetNum).then((response)=>{
  					if (response.status === 200)
  						if (response.data['result'] == "success") {
  							let data = response.data['data'][0];
  							this.title = data['title'];
  							this.subtitle = data['subtitle'];
  							this.post = data['post'];
  							this.img = '/uploads/'+data['img'];
  							if (data['url'] != "") {
  								this.is_url = true;
  								this.url = data['url'];
  							} else {
  								this.is_url = false;
  							}
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

<style lang="scss" scoped>
	.writer {
		position: relative;
		width: 100%;
		max-width: 700px;
		font-size: 14px;
		line-height: 20px;
		margin-top: 10px;
		text-align: right;
		color: #6f6f6f;
		font-weight: bold;
		& > span {
			color: #a2a2a2;
		}
	}
	.url {
		position: relative;
		width: 100%;
		max-width: 700px;
		font-size: 14px;
		line-height: 20px;
		margin-top: 50px;
		display: inline-block;
		font-weight: bold;
		color: #adadad;
		&_btn {
			display: inline-block;
			transition: .2s ease-in-out;
			cursor: pointer;
			color: #070aeb;
			margin-left: 5px;
			font-weight: normal;
			&:hover {
				color: black;
			}
		}
	}
	.post {
		position: relative;
		width: 95%;
		max-width: 700px;
		font-size: 16px;
		line-height: 25px;
		color: #4b4b4b;
		margin: 20px auto;
		padding: 15px;
		box-sizing: border-box;
		border-left: 3px solid #b8a07e;
		background-color: #f7f6f6;
	}
	.subtitle {
		position: relative;
		width: 100%;
		max-width: 700px;
		font-size: 20px;
		line-height: 50px;
		font-weight: bold;
		color: silver;
		margin: auto;
	}
	.title {
		position: relative;
		width: 100%;
		max-width: 700px;
		font-size: 22px;
		line-height: 40px;
		font-weight: bold;
		margin: auto;
		padding-bottom: 10px;
		border-bottom: 2px solid #dbdbdb;
	}
	.post_box {
		position: relative;
		width: 100%;
		height: auto;
		max-width: 700px;
		padding: 25px 20px;
		margin: auto;
		background-color: white;
	}
	.post_image {
		position: relative;
		display: block;
		width: 100%;
		height: auto;
		min-height: 400px;
		max-width: 700px;
		margin: auto;
		margin-bottom: 50px;
		background-image: url("../assets/images/picture.jpg");
		background-repeat: no-repeat;
	}
	.box {
		position: relative;
		width: 90%;
		height: auto;
		padding: 100px 0;
		margin: auto;
	}
	@media screen and (max-width: 500px) {
		.box {
			padding: 50px 0;
		}
		.post {
			width: 100%;
		}
		.url {
			display: block;
			&_btn {
				margin-left: 0;
			}
		}
	}
	.modal {
		position: fixed;
		width: 90%;
		height: 100%;
		box-sizing: border-box;
		border-radius: 40px 0 0 40px;
		background-color: #f7f6f6;
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