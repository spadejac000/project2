var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// POST /info - get a summary of the movie
router.post('/', function(req, res) {
  res.send('hello info')
});

module.exports = router;
