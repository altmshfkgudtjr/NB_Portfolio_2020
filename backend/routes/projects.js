var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var connection = mysql.createConnection(dbconfig);
var multer = require('multer');
// 이미지 파일 저장 경로
var IMG_PATH = "/home/nobrake/NB/static/images/";
IMG_PATH = "./public/uploads/";	// 상대적
// 파일 옵션
var storage = multer.diskStorage({
	// 파일 저장경로
	destination(req, file, callback) {
		callback(null, IMG_PATH);
	},
	// 파일 저장이름 
	filename(req, file, callback) {
		let timestamp = new Date();
		timestamp = timestamp.getFullYear().toString()
		 		+ (timestamp.getMonth() + 1).toString()
		 		+ timestamp.getDate().toString()
		 		+ file.originalname;
		callback(null, timestamp);
	}
});
var upload = multer({storage: storage});

// 전체호출
router.get('/', function(req, res){
  connection.query('SELECT * from projects', function(err, rows) {
    if(err) throw err;
    res.send(rows);
  });
});

// 3개씩 호출 (num == 현재 보여진 프로젝트 개수)
router.get('/:num', function (req, res, next) {
  let num = parseInt(req.params.num, 10);
  connection.query('SELECT * from projects ORDER BY post_id DESC LIMIT '+num+', 3', function(err, rows) {
    if(err) throw err;
    res.send(rows);
  });
});

router.post('/delete', function(req, res) {
	let project_title = req.body.title;
	connection.query('DELETE FROM projects WHERE name = "'+award_name+'"', function(err, rows) {
		if(err) throw err;
		res.send('success');
	});
});

// 여기서 img 란 프론트 상에서 FormData의 key값과 맞춰준다.
router.post('/upload', upload.single('img'), function(req, res) {
	console.log(req.file);
	console.log(req.body);
	
	let project_title = req.body.title;
	let project_subtitle = req.body.subtitle;
	let project_post = req.body.post;
	let project_url = "";
	if ("url" in req.body) {
		project_url = req.body.url;
	}
	if (!req.file) {
		res.send("no img");
		res.end();
	}
	let project_img = new Date();
	project_img = project_img.getFullYear().toString()
		 		+ (project_img.getMonth() + 1).toString()
		 		+ project_img.getDate().toString()
		 		+ req.file.originalname;
	console.log(project_title, project_subtitle, project_post, project_url, project_img);
	connection.query('INSERT INTO projects (title, subtitle, post, url, img) VALUES ("'+project_title+'", "'+project_subtitle+'", "'+project_post+'", "'+project_url+'", "'+project_img+'")', function(err, rows) {
		if(err) throw err;
		res.send('success');
	});
});

router.get('/view/:num', function(req, res, next) {
	let num = parseInt(req.params.num, 10);
	connection.query('SELECT * from projects WHERE post_id LIKE '+num, function(err, rows) {
		if(err) throw err;
		res.send({
			"result": "success",
			"data": rows
		});
	});
});

module.exports = router;