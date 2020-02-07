<template>
	<div class="login_modal">
		<div class="login_box">
			<div class="title noselect">LOGIN</div>
			<input id="uid" type="text" class="login_input" placeholder="ID" v-on:keyup.13="Go_Login">
			<input id="upw" type="password" class="login_input" placeholder="PW" v-on:keyup.13="Go_Login">
		</div>
		<div class="login_btns">
			<div class="login_btn" v-on:click="Go_Login">Sign Up</div>
			<div class="login_btn" v-on:click="Go_Logout">Quit</div>
		</div>
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
			// v-on:keyup.13="Go_Login" 와 같이 Key에 관한 binding을 할 수 있다.
			Go_Login: () => {
				let sendData = {};
				sendData['uid'] = document.getElementById('uid').value;
				sendData['upw'] = document.getElementById('upw').value;
				if (sendData['uid'] == '') {
					document.getElementById('uid').focus();
					return;
				}
				else if (sendData['upw'] == '') {
					document.getElementById('upw').focus();
					return;
				}
				axios.post('http://localhost:3000/user', sendData).then((response)=>{
  					if (response.status === 200) {
  						if (response.data == "success")
	  						eventBus.$emit("SuccessLogin");
	  					else // (response.data == "fail")
	  						alert("Login Failed!");
  					}
        		});
			},
			Go_Logout: () => {
				eventBus.$emit("ByeLogin");
			}
		},
		created() {
			eventBus.$on("GoLogin", () => {
				setTimeout(function() {document.querySelector('#uid').focus();}, 500);
			})
		}
	}
</script>

<style scoped lang="scss">
	.top-enter-active, .top-leave-active {
		transition: opacity .5s;
	}
	.top-enter, .top-leave-to {
		opacity: 0;
	}

	.login_btn {
		width: 150px;
		height: 40px;
		font-size: 16px;
		line-height: 36px;
		border: 2px solid black;
		border-radius: 5px;
		text-align: center;
		font-weight: bold;
		cursor: pointer;
		transition: .2s ease-in-out;
		margin-top: 50px;
	}
	@media screen and (max-width: 500px) {
		.login_btn {
			width: 100px;
		}
	}
	.login_btn:first-child {
		margin-left: 30px;
		float: left;
	}
	.login_btn:last-child {
		margin-right: 30px;
		float: right;
		color: #bd0606;
		border: 2px solid #bd0606;
	}
	.login_btn:first-child:hover {
		color: white;
		background-color: black;
	}
	.login_btn:last-child:hover {
		color: white;
		background-color: #bd0606;
	}
	.login_btns {
		position:relative;
		width: 90%;
		max-width: 500px;
		height: 100px;
		display: block;
		margin: auto;
	}
	.login_modal {
		position: relative;
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	.login_box {
		position: relative;
		width: 100%;
		height: auto;
		padding-top: 150px;
	}
	.title {
		position:relative;
		text-align: center;
		font-size: 40px;
		font-weight: bold;
	}
	@media screen and (max-width: 500px) { 
		.login_box {
			padding-top: 80px;
		}
		.title {
			font-size: 32px;
		}
	}
	.login_input {
		position:relative;
		display: block;
		width: 90%;
		max-width: 500px;
		margin: auto;
		margin-top: 30px;
		height: 40px;
		border: none;
		border-bottom: 2px solid #adadad;
		padding: 0 10px 5px 10px;
		font-size: 18px;
		text-align: center;
		transition: .2s ease-in-out;
	}
	.login_input:focus {
		border-bottom: 2px solid #bd0606;
	}
	input:focus {
		outline: none;
	}
</style>