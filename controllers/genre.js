var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// Get /genre - get all movies in genre
router.get('/', function(req, res) {
  res.send('Hello Genre');
});

module.exports = router;
