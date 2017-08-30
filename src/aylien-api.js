var https = require('https'),
    querystring = require('querystring');

const APPLICATION_KEY = process.env.XAYLIENTextAPIApplicationKey,
      APPLICATION_ID = process.env.XAYLIENTextAPIApplicationId;

function call_api(endpoint, parameters, callback) {
  var postData = querystring.stringify(parameters);
  var request = https.request({
    host: 'api.aylien.com',
    path: '/api/v1/' + endpoint,
    headers: {
      'Accept':                             'application/json',
      'Content-Type':                       'application/x-www-form-urlencoded',
      'Content-Length':                     postData.length,
      'X-AYLIEN-TextAPI-Application-ID':    APPLICATION_ID,
      'X-AYLIEN-TextAPI-Application-Key':   APPLICATION_KEY,
    }
  }, function(response) {
    var data = "";
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      callback(JSON.parse(data));
    });
  });
  request.write(postData);
  request.end();
}

var parameters = {'text': 'John is a very good football player!'};
call_api('sentiment', parameters, function(result) {
  console.log(result);
});

call_api('language', parameters, function(result) {
  console.log(result);
});
