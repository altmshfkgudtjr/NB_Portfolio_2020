var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var connection = mysql.createConnection(dbconfig);

// Awards 전체호출
router.get('/', function(req, res){
  connection.query('SELECT * from awards', function(err, rows) {
    if(err) throw err;
    res.send(rows);
  });
});

router.post('/delete', function(req, res) {
	let award_name = req.body.name;
	connection.query('DELETE FROM awards WHERE name = "'+award_name+'"', function(err, rows) {
		if(err) throw err;
		res.send('success');
	});
});

router.post('/upload', function(req, res) {
	let award_name = req.body.name;
	let award_date = req.body.date;
	connection.query('INSERT INTO awards (name, date) VALUES ("'+award_name+'", "'+award_date+'")', function(err, rows) {
		if(err) throw err;
		res.send('success');
	});
});

module.exports = router;