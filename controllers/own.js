var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

// GET /own - return a page with owned movies
router.get('/', isLoggedIn, function(req, res) {
  db.list.find({
    where: {name: 'own', userId: req.user.id}
  }).then(function(list) {
    list.getMovies().then(function(data) {
      res.render('own', {ownlist: data, list: list})
    })

  })
});

// POST /own - receive the name of a movie and add it to the database
router.post('/:movie', isLoggedIn, function(req, res) {
    db.list.find({
      where: {name: 'own', userId: req.user.id}
    }).then(function(list) {
      db.movie.findOrCreate({
        where: {name: req.params.movie}
      }).spread(function(movie, created) {
      list.addMovie(movie).then(function(data) {
        res.redirect('/own');
      });
    });
  });
});

// DELETE /movie - delete movie from own list
router.delete('/:id/:list', function(req, res) {
  console.log('oooga booga')
  db.moviesLists.destroy({
    where: {movieId: req.params.id, listId: req.params.list}
  }).then(function(data) {
    res.sendStatus(200);
  });
});

module.exports = router;
