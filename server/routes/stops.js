var express = require('express');
var router = express.Router();
var csv = require('../modules/csvConverter.js');

router.get('/', function(req, res) {
  res.send(csv);
})

module.exports = router;
