var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send("hello")
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  res.send("hello");
});

module.exports = router;