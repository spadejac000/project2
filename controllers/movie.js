var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// Get /movie - show specific movie
router.get('/', function(req, res) {
  res.send('Hello Movie');
});

module.exports = router;
