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
				<div id="projects_box" class="projects_box">
					<transition-group name="projectList" tag="div">
						<div class="project_pick noselect" v-for="project in projects" :key="project.post_id" v-on:click="Project_pick" :name="project.post_id">
							<img class="project_pick_img" :src="project.img">
							<div class="project_pick_title">
								{{ project.title }}
							</div>
						</div>
				</transition-group>
				</div>
				<div class="project_wrap">
					<div class="picture_wrap">
						<img id="preview" src="../assets/images/picture.jpg" class="picture">
					</div><div id="info_form" class="info_wrap">
						<input id="img_file" type="file" accept="img/*" required class="img_file">
						<div class="subtitle noselect">title</div>
						<input type="text" class="info_input projectTitle">
						<div class="subtitle noselect">subtitle</div>
						<input type="text" class="info_input projectSubtitle">
						<div class="subtitle noselect">post</div>
						<textarea class="info_inputarea"></textarea>
						<div class="subtitle noselect">URL</div>
						<input type="text" class="info_input projectUrl">
					</div>
					</div>
				<div class="project_submit" v-on:click="Project_upload" v-show="!post_edit">UPLOAD</div>
				<div class="project_submit " v-on:click="Project_edit" v-show="post_edit">EDIT</div>
				<div class="project_submit project_submit_delete" v-on:click="Project_delete" v-show="post_edit">DELETE</div>
				<div class="project_submit" v-on:click="Project_cancel" v-show="post_edit">CANCEL</div>
			</div>
			<div class="upload_wrap">
				<div class="title noselect">AWARDS</div>
				<div class="award_wrap">
					<div class="award_plus" v-on:click="Plus_award">
						<i class="fas fa-plus-circle"></i>
					</div>
					<transition name="top" v-on:enter="award_enter">
						<div class="award" v-show="Plus_Award">
							<input id="award_plus_name" type="text" class="award_input_name" placeholder="Award's Name" v-on:keyup.13="Award_write_submit">
							<input id="award_plus_date" type="text" class="award_input_date" placeholder="Jenuary, 01 2020" v-on:keyup.13="Award_write_submit">
							<i class="fas fa-times-circle award_delete" v-on:click="Award_write_cancel"></i>
							<i class="fas fa-check-circle award_submit" v-on:click="Award_write_submit"></i>
						</div>
					</transition>
					<transition-group name="awardList" tag="div">
						<div class="award" v-for="award in awards" :key="award.award_id">
							<div class="award_title">{{ award.name }}</div>
							<div class="award_date">{{ award.date }}</div>
							<i class="fas fa-eraser award_delete" v-on:click="Award_delete($event)"></i>
						</div>
					</transition-group>
				</div>
			</div>
			<div class="footer">
				<p>© 2020. <span class="NB">NB</span> ALL RIGHTS RESERVED.</p>
				<p>This Website Designed by <span class="NB">NB</span>.</p>
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
				awards: [],
				imgFile: '',
				projects: [],
				post_edit: false
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

    		const slider = document.querySelector('#projects_box');
			let isDown = false;
			let startX;
			let scrollLeft;

			slider.addEventListener('mousedown', (e) => {
			  isDown = true;
			  slider.classList.add('active');
			  startX = e.pageX - slider.offsetLeft;
			  scrollLeft = slider.scrollLeft;
			});
			slider.addEventListener('mouseleave', () => {
			  isDown = false;
			  slider.classList.remove('active');
			});
			slider.addEventListener('mouseup', () => {
			  isDown = false;
			  slider.classList.remove('active');
			});
			slider.addEventListener('mousemove', (e) => {
			  if(!isDown) return;
			  e.preventDefault();
			  const x = e.pageX - slider.offsetLeft;
			  const walk = (x - startX) * 3; //scroll-fast
			  slider.scrollLeft = scrollLeft - walk;
			});

    		this.Get_projects();
    		this.Get_awards();
		},
		methods: {
			Get_projects: function() {
				axios.get('http://localhost:3000/projects').then((response)=>{
  					if (response.status === 200)
        				for (let project_num in response.data){
        					response.data[project_num]['img'] = '/uploads/'+response.data[project_num]['img']
        					this.projects.unshift(response.data[project_num]);
        				}
    			});
			},
			Get_awards: function() {
				axios.get('http://localhost:3000/awards').then((response)=>{
  					if (response.status === 200)
        				for (let award in response.data)
        					this.awards.unshift(response.data[award]);
    			});
			},
			Admin_out: () => {
				location.reload();
			},
			Plus_award: function() {
				this.Plus_Award = true;
				document.querySelector("#award_plus_name").focus();
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
			Award_write_submit: function() {
				let award_name = document.querySelector("#award_plus_name").value;
				let award_date = document.querySelector("#award_plus_date").value;
				if (award_name == "") {
					document.querySelector("#award_plus_name").focus();
					return;
				} else if (award_date == "") {
					document.querySelector("#award_plus_date").focus();
					return;
				} else {
					let sendData = {};
					sendData['name'] = award_name;
					sendData['date'] = award_date;
					let data_len = this.awards.length + 1;
					axios.post('http://localhost:3000/awards/upload', sendData, {
						headers: {'Content-Type': 'multipart/form-data'}
					})
					.then((response)=>{
						if (response.status === 200) {
							if (response.data == "success") {
								sendData['award_id'] = data_len;
								this.awards.unshift(sendData);
								document.querySelector("#award_plus_name").value="";
								document.querySelector("#award_plus_date").value="";
								this.Plus_Award = false;
							}
						}
					});
				}
			},
			Award_delete: function(e) {
				let result = confirm("Really Delete?");
				if(!result) return;
				let sendData = {};
				let award_name = e.target.parentElement.querySelector('.award_title').innerText
				sendData['name'] = award_name;
				e.target.parentElement.querySelector('.award_delete').remove();
				axios.post('http://localhost:3000/awards/delete', sendData)
				.then((response)=>{
  					if (response.status === 200) {
  						if (response.data == "success")
	  						this.awards.splice(this.awards.findIndex(e => e.name === award_name), 1);
  					}
        		});
			},
			Project_upload: function(e) {
				let title = e.target.parentElement.querySelector('.info_wrap').querySelector('.projectTitle').value;
				let subtitle = e.target.parentElement.querySelector('.info_wrap').querySelector('.projectSubtitle').value;
				let post = e.target.parentElement.querySelector('.info_wrap').querySelector('textarea').value;
				let url = e.target.parentElement.querySelector('.info_wrap').querySelector('.projectUrl').value;
				let image = document.querySelector('#img_file').files;
				if (title == "") {
					e.target.parentElement.querySelector('.info_wrap').querySelector('.projectTitle').focus();
					return;
				} else if (subtitle == "") {
					e.target.parentElement.querySelector('.info_wrap').querySelector('.projectSubtitle').focus();
					return;
				} else if (post == "") {
					e.target.parentElement.querySelector('.info_wrap').querySelector('textarea').focus();
					return;
				} else if (image.length == 0) {
					return;
				}
				this.imgFile = image[0];
				let sendData = new FormData();
				sendData.append('title', title);
				sendData.append('subtitle', subtitle);
				sendData.append('post', post);
				sendData.append('img', image[0]);
				if (url != "") sendData.append('url', url);
				axios.post('http://localhost:3000/projects/upload', sendData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}})
				.then((response)=>{
  					if (response.status === 200) {
  						if (response.data == "success"){
	  						alert("Upload Successful!");
	  						document.querySelector('#preview').src = "/dist/picture.jpg";
	  						document.querySelector('#img_file').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectTitle').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectSubtitle').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('textarea').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectUrl').value = "";
	  						this.projects = [];
	  						axios.get('http://localhost:3000/projects').then((response)=>{
			  					if (response.status === 200)
			        				for (let project_num in response.data){
			        					response.data[project_num]['img'] = '/uploads/'+response.data[project_num]['img']
			        					this.projects.unshift(response.data[project_num]);
			        				}
			    			});
  						}
	  					else if (response.data_len == "no img")
	  						alert("Upload Image Please.");
  					} else {
  						alert("Upload Failed.");
  					}
        		});
			},
			Project_edit: function(e) {
				let targetNum = document.querySelector('#info_form').getAttribute('name');
				let title = document.querySelector('#info_form').querySelector('.projectTitle').value;
			  	let subtitle = document.querySelector('#info_form').querySelector('.projectSubtitle').value;
			  	let post = document.querySelector('#info_form').querySelector('textarea').value;
			  	let url = document.querySelector('#info_form').querySelector('.projectUrl').value;
			  	let image = document.querySelector('#img_file').files;
			  	let sendData = new FormData();
			  	sendData.append('target', targetNum);
				sendData.append('title', title);
				sendData.append('subtitle', subtitle);
				sendData.append('post', post);
				if (image.length != 0) {
					this.imgFile = image[0];
					sendData.append('img', image[0]);
				}
				if (url != "") sendData.append('url', url);
				axios.post('http://localhost:3000/projects/update', sendData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}})
				.then((response)=>{
  					if (response.status === 200) {
  						if (response.data == "success"){
	  						alert("Update Successful!");
	  						document.querySelector('#preview').src = "/dist/picture.jpg";
	  						document.querySelector('#img_file').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectTitle').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectSubtitle').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('textarea').value = "";
	  						e.target.parentElement.querySelector('.info_wrap').querySelector('.projectUrl').value = "";
	  						this.projects = [];
	  						axios.get('http://localhost:3000/projects').then((response)=>{
			  					if (response.status === 200)
			        				for (let project_num in response.data){
			        					response.data[project_num]['img'] = '/uploads/'+response.data[project_num]['img']
			        					this.projects.unshift(response.data[project_num]);
			        				}
			        				this.post_edit = false;
			    			});
  						}
  					} else {
  						alert("Update Failed.");
  					}
        		});
			},
			Project_delete: function(e) {
				let result = confirm("Really Delete?");
				if(!result) return;
				let targetNum = document.querySelector('#info_form').getAttribute('name');
				axios.post('http://localhost:3000/projects/delete/'+targetNum).then((response)=> {
					if (response.status === 200)
						if (response.data == "success"){
							this.projects.splice(this.projects.findIndex(e => e.post_id == targetNum), 1);
							document.querySelector('#preview').src = "/dist/picture.jpg";
							document.querySelector('#img_file').value = "";
							document.querySelector('#info_form').querySelector('.projectTitle').value = "";
			  				document.querySelector('#info_form').querySelector('.projectSubtitle').value = "";
			  				document.querySelector('#info_form').querySelector('textarea').value = "";
			  				document.querySelector('#info_form').querySelector('.projectUrl').value = "";
			  				this.post_edit = false;
						}
						else alert("Server Error");
				});
			},
			Project_cancel: function(e) {
				document.querySelector('#preview').src = "/dist/picture.jpg";
				document.querySelector('#img_file').value = "";
				document.querySelector('#info_form').querySelector('.projectTitle').value = "";
  				document.querySelector('#info_form').querySelector('.projectSubtitle').value = "";
  				document.querySelector('#info_form').querySelector('textarea').value = "";
  				document.querySelector('#info_form').querySelector('.projectUrl').value = "";
  				this.post_edit = false;
			},
			Project_pick: function(e) {
				let targetNum = e.target.getAttribute('name');
				if (targetNum == undefined)
					targetNum = e.target.parentElement.getAttribute('name');
				axios.get('http://localhost:3000/projects/view/'+targetNum).then((response)=>{
  					if (response.status === 200)
  						if (response.data['result'] == "success") {
  							let data = response.data['data'][0];
  							document.querySelector('#info_form').setAttribute('name', data['post_id']);
  							document.querySelector('#preview').src = "/uploads/"+data['img'];
  							document.querySelector('#info_form').querySelector('.projectTitle').value = data['title'];
  							document.querySelector('#info_form').querySelector('.projectSubtitle').value = data['subtitle'];
  							document.querySelector('#info_form').querySelector('textarea').value = data['post'];
  							document.querySelector('#info_form').querySelector('.projectUrl').value = data['url'];
  							this.post_edit = true;
  						} else {
  							alert("Server Error");
  						}
    			});
			}
		}
	}
</script>

<style scoped lang="scss">
	.project_pick_title {
		position: relative;
		width: 250px;
		height: 50px;
		font-size: 16px;
		font-weight: bold;
		color: silver;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		transition: .2s ease-in-out;
	}
	.project_pick_img {
		position: relative;
		width: 250px;
		height: 250px;
		background-image: url("../assets/images/picture.jpg");
		background-size: cover;
		background-position: center;
		transition: .2s cubic-bezier(0.43, -0.39, 0.5, 1.09);
	}
	.project_pick {
		position: relative;
		display: inline-block;
		width: 250px;
		height: 300px;
		box-sizing: content-box;
		padding: 10px;
		cursor: pointer;
		margin-left: 50px;
		&:hover > .project_pick_title {
			color: black;
		}
		&:hover > .project_pick_img {
			filter: drop-shadow(8px 8px 10px gray);
		}
		&:first-child {
			margin-left: 0;
		}
	}
	.projects_box {
		float: left;
		width: 100%;
		height: 300px;
		padding-bottom: 20px;
		border-bottom: 2px solid #cbcbcb;
		box-sizing: content-box;
		overflow-y: hidden;
		overflow-x: scroll;
		white-space: nowrap;
		will-change: transform;
		user-select: none;
		&::-webkit-scrollbar {
		    display: none;
		}
	}
	.active {
		cursor: grabbing !important;
		cursor: -webkit-grabbing !important;
		transform: scale(1);
	}
	@media screen and (max-width: 500px) {
		.project_pick_title {
			width: 100%;
			height: auto;
		}
		.projects_box {
			height: 200px;
			padding-bottom: 0;
			margin-bottom: 30px;
		}
		.project_pick {
			width: 150px;
			height: 150px;
			margin-left: 20px;
		}
		.project_pick_img {
			width: 150px;
			height: 150px;
		}
	}
	.NB {
		color: #adadad;
	}
	.footer {
		background-color: #dbdbdb;
		float: left;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 100px 0;
		text-align: center;
		font-size: 1em;
		line-height: 2;
		font-weight: bold;
		text-transform: uppercase;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-selecti: none;
	}
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
		margin-right: 20px;
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
		&_delete {
			border: 2px solid #bd0606;
			color: #bd0606;
			&:hover {
				background-color: #bd0606;
			}
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
		margin-bottom: 20px !important;
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
	}
	.picture_wrap {
		float: left;
		width: 50%;
		max-width: 500px;
		height: 100%;
		max-height: 400px;
		padding-right: 100px;
		box-sizing: border-box;
	}
	.project_wrap {
		position: relative;
		float: left;
		width: 100%;
		height: 650px;
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
			margin-bottom: 100px;
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
		.picture {
			float: left;
			height: 100%;

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
	.projectList-enter-active, .projectList-leave-active {
		transition: all .8s;
	}
	.projectList-enter, .projectList-leave-to {
		opacity: 0;
		margin-left: -200px;
	}
</style>