require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var flash = require('connect-flash');
var request = require('request');
var db = require('./models');

var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public/'));

// 1. this needs to come before you app.use passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// 2. setup flash messages
app.use(flash());

// 3. this must come after the session setup
app.use(passport.initialize());
app.use(passport.session());

// 4. attach the current user to the response for all routes
// also, attach the flash messages
app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

// Get /index - display main page
app.get('/', function(req, res) {
  console.log('whatever')
    var movies = [
      {Title: 'Star Wars: Episode IV - A New Hope', Poster: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'},
      {Title: 'Ice Age', Poster: 'https://ia.media-imdb.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg'},
      {Title: 'The Shawshank Redemption', Poster: 'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'},
      {Title: 'Mission: Impossible - Ghost Protocol', Poster: 'https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg'},
      {Title: 'Dumb and Dumber', Poster: 'https://ia.media-imdb.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
      {Title: 'Remember the Titans', Poster: 'https://ia.media-imdb.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
      {Title: 'The Bourne Identity', Poster: 'https://ia.media-imdb.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
      {Title: 'Monty Python and the Holy Grail', Poster: 'https://ia.media-imdb.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'},
      {Title: 'Serendipity', Poster: 'https://ia.media-imdb.com/images/M/MV5BMTkzMjEzOTQ3Nl5BMl5BanBnXkFtZTYwMjI1NzU5._V1_SX300.jpg'}]
    res.render('index', { movies: movies});
});

//GET /edit - get page to edit review post
app.get('/:id/comment/edit', function(req, res) {
  db.comment.find({
    where: {id: req.params.id},
    include: [db.movie]
  }).then(function(data) {
    res.render('edit', {comment: data})
  })
});


// PUT /comment - edit a comment
app.put('/:id/comment', function(req, res) {
  db.comment.update({
    content: req.body.content
  }, {
    where: {id: req.params.id}
  }).then(function(post) {
    res.sendStatus(200);
  });
});

app.use('/auth', require('./controllers/auth'));
app.use('/movie', require('./controllers/movie'));
app.use('/own', require('./controllers/own'));
app.use('/wishlist', require('./controllers/wishlist'));
app.use('/info', require('./controllers/info'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
