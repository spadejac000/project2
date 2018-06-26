var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var request = require('request');

// GET /info - get a summary of the movie
router.get('/:id', function(req, res) {
  var moviesUrl = 'http://www.omdbapi.com/?apikey=df0475&i=' + req.params.id;
  // Use request to call the API
  request(moviesUrl, function(error, response, body) {
    var movies = JSON.parse(body);
    res.render('info', {movies: movies});
  });
});

module.exports = router;
