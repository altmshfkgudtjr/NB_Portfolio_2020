var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../database.js');
var pool = mysql.createPool(dbconfig);
var md5 = require('md5');
var key = require('../md5Key.js')

// 전체호출
router.post('/', function(req, res){
  pool.getConnection( function( err, connection ) {  
    if ( err ) throw err;
    else {
      let uname = req.body.uid;
      let upw = req.body.upw;
      let hashed = md5(md5(uname+upw)+key);
      let sql = 'SELECT (pw) from user WHERE id LIKE ?';
      let params = [uname];
      connection.query(sql, params, function(err, rows) {
        if(err) throw err;
      	else if (rows.length == 0) {
      		connection.release();
          res.end("fail");
      	}
        else if (rows[0]['pw'] == hashed) {
        	connection.release();
          res.send("success");
        } else {
        	connection.release();
          res.send("fail");
        }
      });
    }
  });
});

module.exports = router;