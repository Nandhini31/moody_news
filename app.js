require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var AylienNewsApi = require('aylien-news-api');
// module.exports.AylienNewsApi = AylienNewsApi

require('./public/javascripts/test')
var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = process.env.X_AYLIEN_NewsAPI_Application_ID;

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = process.env.X_AYLIEN_NewsAPI_Application_Key;

var opts = {
  'title': 'trump',
  'sortBy': 'social_shares_count.facebook',
  'language': ['en'],
  'notLanguage': ['es', 'it'],
  'publishedAtStart': 'NOW-7DAYS',
  'publishedAtEnd': 'NOW',
  'entitiesBodyLinksDbpedia': [
    'http://dbpedia.org/resource/Donald_Trump',
    'http://dbpedia.org/resource/Hillary_Rodham_Clinton'
  ]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log('========================================');
    for (var i = 0; i < data.stories.length; i++){
      console.log(data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};
apiInstance.listStories(opts, callback);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
