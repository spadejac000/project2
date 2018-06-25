require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var flash = require('connect-flash');

var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

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

app.get('/', function(req, res) {
  res.render('index');
});


app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

// Get /index - display main page
app.get('/index', function(req, res) {
  var moviesUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=df0475';
  // Use request to call the API
  request(moviesUrl, function(error, response, body) {
    var movies = JSON.parse(body).results;
    res.render('index', { movies: movies });
  });
});

app.use('/auth', require('./controllers/auth'));
app.use('/main', require('./controllers/main'));
app.use('/genre', require('./controllers/genre'));
app.use('/movie', require('./controllers/movie'));
app.use('/own', require('./controllers/own'));
app.use('/wishlist', require('./controllers/wishlist'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
