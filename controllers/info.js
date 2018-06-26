var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var request = require('request');
var isLoggedIn = require('../middleware/isLoggedIn');

// GET /info - get a summary of the movie
router.get('/:id', function(req, res) {
  var moviesUrl = 'http://www.omdbapi.com/?apikey=df0475&i=' + req.params.id;
  // Use request to call the API
  request(moviesUrl, function(error, response, body) {
    movies = JSON.parse(body);
  });
  db.comment.find({
    where: { imdbId: req.params.id }
    }).then(function(data) {
      res.render('info', {movies: movies, comments: data});
  })
});

// POST /comment - create a new comment
router.post('/:id/comment', isLoggedIn, function(req, res) {
  db.comment.create({
    userId: req.user.id,
    imdbId: req.params.id,
    content: req.body.content
  }).then(function(post) {
        res.redirect('#');
      });
  });

module.exports = router;
