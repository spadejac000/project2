var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// GET /own - return a page with owned movies
router.get('/', function(req, res) {
  db.list.findAll().then(function(data) {
    res.render('own', {ownlist: data})
  })
});

// POST /own - receive the name of a movie and add it to the database
router.post('/', function(req, res) {
  db.list.create({
    name: req.body.name,
  }).then(function(data) {
    res.redirect('own');
  });
});

module.exports = router;
