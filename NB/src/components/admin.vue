<template>
	<transition name="top">
		<div>
			<div class="admin_page">
				<div class="header">
					<img v-show="logo[0]" src="../assets/images/NBlog_black.png" class="logo">
					<img v-show="logo[1]" src="../assets/images/NB_black.png" class="logo">
					<div class="admit_out_cont">
						<div class="admin_out_btn" v-on:click="Admin_out">
							<span>GET</span>
							<div class="btn_line"></div>
							<span>BACK</span>
						</div>
					</div>
				</div>
			</div>
			<div class="upload_wrap">
				<div class="title noselect">PORTFOLIO & EXPERIENCE</div>
				<div class="project_wrap">
					<div class="picture_wrap">
						<img id="preview" src="../assets/images/picture.jpg" class="picture">
					</div><div class="info_wrap">
						<input id="img_file" type="file" accept="img/*" required class="img_file">
						<div class="subtitle noselect">title</div>
						<input type="text" class="info_input">
						<div class="subtitle noselect">subtitle</div>
						<input type="text" class="info_input">
						<div class="subtitle noselect">post</div>
						<textarea class="info_inputarea"></textarea>
					</div>
				</div>
				<div class="project_submit">UPLOAD</div>
			</div>
			<div class="upload_wrap">
				<div class="title noselect">AWARDS</div>
				<div class="award_wrap">
					<div class="award_plus" v-on:click="Plus_award">
						<i class="fas fa-plus-circle"></i>
					</div>
					<transition name="top" v-on:enter="award_enter">
						<div class="award" v-show="Plus_Award">
							<input id="award_plus_name" type="text" class="award_input_name" placeholder="Award's Name">
							<input id="award_plus_date" type="text" class="award_input_date" placeholder="Jenuary, 01 2020">
							<i class="fas fa-times-circle award_delete" v-on:click="Award_write_cancel"></i>
							<i class="fas fa-check-circle award_submit" v-on:click="Award_write_submit"></i>
						</div>
					</transition>
					<transition-group name="awardList" tag="div">
						<div class="award" v-for="award in awards" :key="award.award_id">
							<div class="award_title">{{ award.name }}</div>
							<div class="award_date">{{ award.date }}</div>
							<i class="fas fa-eraser award_delete" v-on:click="Award_delete($event)"></i>
							<i class="fas fa-edit award_edit" v-on:click="Award_edit($event)"></i>
						</div>
					</transition-group>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import axios from 'axios'
	import { eventBus } from "../App.vue"
	var smallDisplay = false;	// Now Screen Width Boolean
	export default {
		data() {
			return {
				// Full_Black, Full_White, Short_Black, Short_White
				Plus_Award: false,
				logo: [false, false],
				awards: []
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
						this.logo = this.logo.map((el, index) =>
							index === i ? !el : el
						)
					}
				}
				if (now < 1) {
					//this.logo[now + 2] = !this.logo[now + 2];
					this.logo = this.logo.map((el, index) =>
						index === now + 1 ? !el : el
					)
				}
				else {
					//this.logo[now - 2] = !this.logo[now - 2];
					this.logo = this.logo.map((el, index) =>
						index === now - 1 ? !el : el
					)
				}
				smallDisplay = !smallDisplay;
			});
		},
		mounted() {
			let upload = document.querySelector('#img_file');
			let preview = document.querySelector('#preview');
    		upload.addEventListener('change', function (e) {
    		    let get_file = e.target.files;
				/* FileReader 객체 생성 */
				let reader = new FileReader();
				/* reader 시작시 함수 구현 */
				reader.onload = (function (aImg) {
					return function(e) {
						/* base64 인코딩 된 스트링 데이터 */
						aImg.src = e.target.result;
					}
				})(preview);
				if(get_file){
					reader.readAsDataURL(get_file[0]);
				}
    		});
    		this.Get_awards();
		},
		methods: {
			Get_awards: function() {
				axios.get('http://localhost:3000/awards').then((response)=>{
  					if (response.status === 200)
        				for (let award in response.data)
        					this.awards.push(response.data[award]);
    			});
			},
			Admin_out: () => {
				location.reload();
			},
			Plus_award: function() {
				this.Plus_Award = true;
			},
			// transition done 훅
			award_enter: (el, done) => {
				document.querySelector("#award_plus_name").focus();
				done();
			},
			Award_write_cancel: function() {
				document.querySelector("#award_plus_name").value="";
				document.querySelector("#award_plus_date").value="";
				this.Plus_Award = false;
			},
			Award_write_submit: () => {
				let award_name = document.querySelector("#award_plus_name").value;
				let award_date = document.querySelector("#award_plus_date").value;
				if (award_name == "") {
					document.querySelector("#award_plus_name").focus();
					return;
				} else if (award_date == "") {
					document.querySelector("#award_plus_date").focus();
					return;
				}
			},
			Award_edit: function(e) {
				
			},
			Award_delete: function(e) {
				let sendData = {};
				let award_name = e.target.parentElement.querySelector('.award_title').innerText
				sendData['name'] = award_name;
				axios.post('http://localhost:3000/awards/delete', sendData).then((response)=>{
  					if (response.status === 200) {
  						if (response.data == "success")
	  						this.awards.splice(this.awards.findIndex(e => e.name === award_name), 1);
	  					else // (response.data == "fail")
	  						console.log("2");
  					}
        		});
			}
		}
	}
</script>

<style scoped lang="scss">
	.award_input_name {
		font-weight: bold;
		position: relative;
		display: inline-block;
		width: 500px;
		border: none;
		border-bottom: 2px solid silver;
		transition: .2s ease-in-out;
		margin-right: 20px;
		font-size: 20px;
		padding: 2px 5px;
		&:focus {
			border-bottom: 2px solid #bd0606;
		}
	}
	.award_input_name::placeholder {
		color: silver;
	}
	.award_input_date {
		padding: 2px 5px;
		font-size: 20px;
		font-weight: bold;
		position: relative;
		display: inline-block;
		width: 200px;
		border: none;
		border-bottom: 2px solid silver;
		transition: .2s ease-in-out;
		&:focus {
			border-bottom: 2px solid #bd0606;
		}
	}
	.award_input_date::placeholder {
		color: silver;
	}
	@media screen and (orientation: portrait) {
		.award_input_name {
			width: 80%;
			font-size: 16px;
		}
		.award_input_date {
			width: 50%;
			font-size: 16px;
		}	
	}
	@media screen and (max-width: 500px) {
		.award_input_name {
			width: 80%;
			font-size: 16px;
		}
		.award_input_date {
			width: 50%;
			font-size: 16px;
		}
	}
	.award_submit {
		font-size: 24px;
		float: right;
		cursor: pointer;
		color: silver;
		transition: .2s ease-in-out;
		margin-right: 20px;
		&:hover {
			color: #22c20a;
		}
	}
	.award_plus {
		position: relative;
		width: 100%;
		height: 40px;
		margin-bottom: 30px;
		color: silver;
		text-align: center;
		font-size: 30px;
		cursor: pointer;
		transition: .2s ease-in-out;
		&:hover {
			color: black;
		}
	}
	.admit_out_cont {
		float: right;
		position: relative;
		display: inline-block;
		font-size: 20px;
		color: black;
		text-align: right;
		height: 50px;
		line-height: 50px;
		font-weight: bold;
	}
	.admin_out_btn {
		cursor: pointer;
	}
	.btn_line {
		position: relative;
		display: inline-block;
		width: 100px;
		height: 2px;
		margin: 0 2px 5px 2px;
		background-color: black;
		transition: .7s cubic-bezier(0.65, 0, 0.17, 0.98);
	}
	.admin_out_btn:hover > .btn_line {
		width: 0;
	}

	.award_delete {
		font-size: 24px;
		float: right;
		cursor: pointer;
		color: silver;
		transition: .2s ease-in-out;
		&:hover {
			color: #bd0606;
		}
	}
	.award_edit {
		font-size: 24px;
		float: right;
		margin-right: 20px;
		cursor: pointer;
		color: silver;
		transition: .2s ease-in-out;
		&:hover {
			color: black;
		}
	}
	.award_date { 
		display: inline-block;
		color: silver;
	}
	.award_title {
		display: inline-block;
		color: #404040;
	}
	.award {
		position: relative;
		width: 90%;
		height: 40px;
		margin-bottom: 20px;
		padding-left: 20px;
		border-left: 3px solid black;
		font-size: 20px;
		line-height: 40px;
		font-weight: bold;
	}
	@media screen and (orientation: portrait) {
		.award {
			float: left;
			height: auto;
			padding-left: 10px;
			width: 100%;
			font-size: 16px;
			line-height: 24px;
		}	
	}
	.award_edit, .award_delete, .award_submit {
		line-height: 40px;
	}
	@media screen and (max-width: 500px) {
		.award {
			float: left;
			height: auto;
			padding-left: 10px;
			width: 100%;
			font-size: 16px;
			line-height: 24px;
		}
		.award_edit, .award_delete, .award_submit {
			font-size: 18px;
			line-height: 30px;
		}
	}
	.award_wrap {
		position: relative;
		width: 100%;
		height: auto;
	}
	.project_submit {
		float: left;
		margin-top: 30px;
		margin-left: auto;
		width: 240px;
		height: 30px;
		border: 2px solid black;
		border-radius: 5px;
		text-align: center;
		line-height: 26px;
		cursor: pointer;
		font-weight: bold;
		transition: .2s ease-in-out;
		&:hover {
			background-color: black;
			color: white;
		}
	}
	@media screen and (max-width: 500px) {
		.project_submit {
			width: 100%;
		}
	}
	.img_file {
		position: relative;
		margin-bottom: 30px;
	}
	.info_input {
		position: relative;
		width: 80%;
		display: block;
		margin-bottom: 30px;
		padding: 10px 5px 10px 5px;
		border: none;
		border-bottom: 2px solid #adadad;
		transition: .2s ease-in-out;
		&:focus {
			border-bottom: 2px solid #bd0606
		}
	}
	.info_inputarea {
		position: relative;
		width: 80%;
		height: 150px;
		display: block;
		padding: 10px 5px 10px 5px;
		border: 2px solid #adadad;
		border-radius: 5px;
		transition: .2s ease-in-out;
		resize: none;
		margin-top: 10px !important;
		&:focus {
			border: 2px solid #bd0606
		}
	}
	input:focus, textarea:focus {
		outline: none;
	}
	.subtitle {
		position:relative;
		display: block;
		font-size: 18px;
		font-weight: bold;
	}
	.info_wrap {
		float: left;
		width: 50%;
		height: 100%;
		box-sizing: border-box;
	}
	.picture {
		position: relative;
		width: 100%;
		max-width: 500px;
		height: 100%;
		&:after {
			content: '';
			display: block;
			padding-bottom: 100%;
		}
	}
	.picture_wrap {
		float: left;
		width: 50%;
		max-width: 500px;
		height: 100%;
		padding-right: 100px;
		box-sizing: border-box;
	}
	.project_wrap {
		position: relative;
		float: left;
		width: 100%;
		height: 500px;
		padding: 50px 0;
		box-sizing: border-box;
	}
	@media screen and (orientation: portrait) {
		.project_wrap {
			height: 400px;
		}
	}
	@media screen and (max-width: 500px) {
		.info_wrap {
			width: 100%;
		}
		.picture_wrap {
			width: 100%;
			padding-right: 0;
		}
		.project_wrap {
			padding: 0 0 0 0;
			height: auto;
		}
		.subtitle {
			font-size: 16px;
		}
		.info_input {
			padding: 5px;
			margin-bottom: 15px;
			width: 100%;
		}
		.info_inputarea {
			width: 100%;
		}
	}
	.title {
		position: relative;
		width: 100%;
		font-weight: bold;
		margin-bottom: 30px;
		font-size: 20px;
	}
	.upload_wrap {
		float: left;
		width: 100%;
		height: auto;
		padding: 50px 5%;
		box-sizing: border-box;
	}
	.admin_page {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		height: auto;
	}
	.header {
		position: relative;
		width: 100%;
		height: 140px;
		padding: 45px 5%;
    	background-color: white;
    	box-sizing: border-box;
    	z-index: 10;
    	transition: .1s ease-in-out;
	}
	.logo {
		position: relative;
		height: 50px;
		width: auto;
	}
	@media screen and (max-width: 500px) {
		.header {
			height: 70px;
			padding: 15px 5%;
		}
		.logo {
			height: 40px;
		}
	}





	/* Transition */
	.top-enter-active, .top-leave-active {
		transition: opacity .5s;
	}
	.top-enter, .top-leave-to {
		opacity: 0;
	}
	.awardList-enter-active, .awardList-leave-active {
		transition: all .8s;
	}
	.awardList-enter, .awardList-leave-to {
		opacity: 0;
		margin-bottom: -40px;
	}
</style>