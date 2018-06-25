var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// GET /wishlist - get list of movies user wants
router.get('/', function(req, res) {
  res.send('Hello Wishlist');
});

module.exports = router;
