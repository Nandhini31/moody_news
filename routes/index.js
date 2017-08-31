var express = require('express');
var router = express.Router();
var AylienNewsApi = require('aylien-news-api');
// module.exports.AylienNewsApi = AylienNewsApi

// require('./public/javascripts/test')
var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = process.env.X_AYLIEN_NewsAPI_Application_ID;

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = process.env.X_AYLIEN_NewsAPI_Application_Key;

// var opts = {
//   'title': 'trump',
//   'sortBy': 'social_shares_count.facebook',
//   'language': ['en'],
//   'notLanguage': ['es', 'it'],
//   'publishedAtStart': 'NOW-7DAYS',
//   'publishedAtEnd': 'NOW',
//   'entitiesBodyLinksDbpedia': [
//     'http://dbpedia.org/resource/Donald_Trump',
//     'http://dbpedia.org/resource/Hillary_Rodham_Clinton'
//   ]
// };

var self = this

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log('========================================');
    for (var i = 0; i < data.stories.length; i++){
			console.log(data.stories[i].title + " / " + data.stories[i].source.name);
      self.document.getElementById("app").innerHTML += (data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};
// apiInstance.listStories(opts, callback);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moody News' });
});

router.get('/happy', function(req, res, next) {
	var opts = {
	  'language': ['en'],
	  'notLanguage': ['es', 'it'],
	  'publishedAtStart': 'NOW-7DAYS',
	  'publishedAtEnd': 'NOW',
		'sentimentBodyPolarity': 'positive',
		'sentimentTitlePolarity': 'positive'
	  // 'entitiesBodyLinksDbpedia': [
	  //   'http://dbpedia.org/resource/Donald_Trump',
	  //   'http://dbpedia.org/resource/Hillary_Rodham_Clinton'
	  // ]
	};
	apiInstance.listStories(opts, callback);
	res.render('index', {title: 'Mood: Happy 🙂'})
})

module.exports = router;
