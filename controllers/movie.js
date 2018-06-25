var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();

// Get /movie - show specific movie
router.get('/', function(req, res) {
  var moviesUrl = 'http://www.omdbapi.com/?apikey=df0475&s=' + userInput;
  // Use request to call the API
  request(moviesUrl, function(error, response, body) {
    var movies = JSON.parse(body);
    console.log(movies.Search.length);
    res.render('movie', { movies: movies});
  });
});

module.exports = router;
