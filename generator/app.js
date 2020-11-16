import express from 'express'
<<<<<<< HEAD
import moviesRouter from '.routes/movies.js'
=======
import usersRouter from '.routes/users.js'
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
=======

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

<<<<<<< HEAD

=======
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
=======

app.use('/', indexRouter);
app.use('/users', usersRouter);
>>>>>>> 500e990dc8f8bf676786e86460fc1c6d6e79990d

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
