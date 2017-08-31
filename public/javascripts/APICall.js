(function(exports){
  function APICall(element, jqueryGetMethod){
    this.requestMethod = jqueryGetMethod;
    this.element = element;
  }
  APICall.prototype.getHappyResponse = function() {
    var request = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?show-fields=body";
    var self = this;
    this.requestMethod(request, function (response){
      responseNewsBody = response.response.content.fields.body;
      self.element.innerHTML = responseNewsBody;
    });
  };

  APICall.prototype.getSadResponse = function() {
    var request = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
    var self = this;
    this.requestMethod(request, function (response){
      responseNewsBody = response.response.content.fields.body;
      self.element.innerHTML = responseNewsBody;
    });
  };

exports.APICall = APICall;
})(this);
