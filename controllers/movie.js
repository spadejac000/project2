var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var request = require('request');
var router = express.Router();

// POST /movie - show specific movie
router.post('/', function(req, res) {
  var userInput = req.body.search;
  console.log(userInput);
  var moviesUrl = 'http://www.omdbapi.com/?apikey=df0475&s=' + userInput;
  // Use request to call the API
  request(moviesUrl, function(error, response, body) {
    var movies = JSON.parse(body);
    console.log(movies);
    res.render('movie', { movies: movies.Search});
  });
});

module.exports = router;
