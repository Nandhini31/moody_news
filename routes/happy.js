var express = require('express');
var router = express.Router();
var AylienNewsApi = require('aylien-news-api');
var $ = require('jquery')

// require('./public/javascripts/test')
var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = process.env.X_AYLIEN_NewsAPI_Application_ID;

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = process.env.X_AYLIEN_NewsAPI_Application_Key;

router.get('/', function(req, res, next) {
	var opts = {
	  'language': ['en'],
	  'notLanguage': ['es', 'it'],
	  'publishedAtStart': 'NOW-7DAYS',
	  'publishedAtEnd': 'NOW',
		'sentimentBodyPolarity': 'positive',
		'sentimentTitlePolarity': 'positive'
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
			res.render('index', {title: 'Enjoy a selection of positive news stories', stories: data.stories});
		}
	};
	apiInstance.listStories(opts, callback);
});

module.exports = router;
