// 필수 library import
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mysql      = require('mysql');
var dbconfig   = require('./database.js');
var connection = mysql.createConnection(dbconfig);
var http = require('http')

// heroku sleep 방지
setInterval(function() {
	http.get('https://nb-log.herokuapp.com/');
}, 1200000); // every 20 minutes

// API 분리 연결
var indexRouter = require('./routes/index');
var projects = require('./routes/projects');
var awards = require('./routes/awards');
var user = require('./routes/user');


// express 연결
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
  

// app에서 사용할 options
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* API 요청 URL======================================= */
// 메인페이지 기본 실행 API
app.use('/', indexRouter);
// Projects 관련 API
app.use('/projects', projects);
// Awards 관련 API
app.use('/awards', awards);
// User 관련 API
app.use('/user', user);



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