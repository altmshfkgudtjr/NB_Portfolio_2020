var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var pool = mysql.createPool(dbconfig);

// Awards 전체호출
router.get('/', function(req, res){
  pool.getConnection( function( err, connection ) {  
    if ( err ) throw err;
    else {
      let sql = 'SELECT * from awards';
      connection.query(sql, function(err, rows) {
        if(err) throw err;
        connection.release();
        res.send(rows);
      });
    }
  });
});

router.post('/delete', function(req, res) {
	pool.getConnection( function( err, connection ) {  
		if ( err ) throw err;
		else {
			let award_name = req.body.name;
			let sql = 'DELETE FROM awards WHERE name = ?';
		    let params = [award_name];
			connection.query(sql, params, function(err, rows) {
				if(err) throw err;
				connection.release();
				res.send('success');
			});
		}
	});
});

router.post('/upload', function(req, res) {
	pool.getConnection( function( err, connection ) {  
		if ( err ) throw err;
		else {
			let award_name = req.body.name;
			let award_date = req.body.date;
			let sql = 'INSERT INTO awards (name, date) VALUES (?, ?)';
		    let params = [award_name, award_date];
			connection.query(sql, params, function(err, rows) {
				if(err) throw err;
				connection.release();
				res.send('success');
			});
		}
	});
});

module.exports = router;