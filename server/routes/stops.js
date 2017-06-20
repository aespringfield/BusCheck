var express = require('express');
var router = express.Router();
var stops;

require('../modules/csvConverter.js').initialize(function (err, result) {
  stops = result;
});

router.get('/', function(req, res) {
  console.log('stops', stops);
  res.send(stops);
})

module.exports = router;
