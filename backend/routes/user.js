var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var connection = mysql.createConnection(dbconfig);
var md5 = require('md5');
var key = require('../md5Key.js')

// 전체호출
router.post('/', function(req, res){
  let uname = req.body.uid;
  let upw = req.body.upw;
  let hashed = md5(md5(uname+upw)+key);
  connection.query('SELECT (pw) from user WHERE id LIKE "'+uname+'"', function(err, rows) {
    if(err) throw err;
  	else if (rows.length == 0) {
  		res.end("fail");
  	}
    else if (rows[0]['pw'] == hashed) {
    	res.send("success");
    } else {
    	res.send("fail");
    }
  });
});

module.exports = router;