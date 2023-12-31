var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registrationRouter = require('./routes/registration')

var departmentRouter = require('./routes/department');
var municipalityRouter = require('./routes/municipality');
var districtRouter = require('./routes/district');

const authentification = require('./middleware/authentication.middleware.js');

var app = express();

  // Json parsing
const bodyParser = require('body-parser');
const { getmunicipality } = require('./routes/municipality');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

require('./config/database')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin',"*")
  res.header('Access-Control-Allow-Headers',"*")
  next()
});

app.use('/', indexRouter);
app.use('/users', authentification, usersRouter);
app.use('/auth', registrationRouter);

app.use('/department', departmentRouter);
app.use('/municipality', municipalityRouter);
app.use('/district', districtRouter)



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
