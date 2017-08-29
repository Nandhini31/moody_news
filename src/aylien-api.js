(function(exports){
  function ApiCallsModel() {
  }
  ApiCallsModel.prototype.testApi = function(){
    var htmlToLoad = "https://api.newsapi.aylien.com/api/v1/stories?published_at.start=NOW-30DAYS%2FDAY&published_at.end=NOW&categories.id%5B%5D=IAB12&categories.taxonomy=iab-qag&language=en&sort_by=recency&sentiment.title.polarity=positive"
    this.load(htmlToLoad, function(xhr) {
      var json = JSON.parse(xhr.responseText);
      console.log(json)
    });
  };

  ApiCallsModel.prototype.load = function(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = ensureReadiness;
          function ensureReadiness() {
              if(xhr.readyState < 4) {
                  return;
              }
              if(xhr.status !== 200) {
                  return;
              }
              if(xhr.readyState === 4) {
                  callback(xhr);
              }
          }
          xhr.open('GET', url, true);
          xhr.send('');
      }
      exports.ApiCallsModel = ApiCallsModel
    })(this);
