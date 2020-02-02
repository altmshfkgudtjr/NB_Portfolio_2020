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

module.exports = router;