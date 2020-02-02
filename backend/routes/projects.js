var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var connection = mysql.createConnection(dbconfig);
// 이미지 파일 저장 경로
var IMG_PATH = "/home/nobrake/NB/static/images/";
var ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif'];

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
  connection.query('SELECT * from projects LIMIT '+num+', 3', function(err, rows) {
    if(err) throw err;
    res.send(rows);
  });
});

module.exports = router;