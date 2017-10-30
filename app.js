'use strict'

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var restFul = require('express-method-override')('_method');
var routes = require('./routes/pelicula-router');
var bodyParser = require('body-parser');
var faviconURL = `${__dirname}/public/images/node-favicon.png`;
var publicDir = express.static(`${__dirname}/public`);
var viewDir = `${__dirname}/views`;
var port = (process.env.PORT||3000);
var app = express();

app.set('views',viewDir);
app.set('view engine', 'jade');
app.set('port',port);

app.use(favicon(faviconURL));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(restFul);
app.use(morgan('dev'));
app.use(publicDir);
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
