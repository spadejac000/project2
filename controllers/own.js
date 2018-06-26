var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// GET /own - get list of movies user owns
router.get('/', function(req, res) {
  res.render('own');
});

module.exports = router;
