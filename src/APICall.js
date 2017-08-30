(function(exports){
  function APICall(){
    this.newsBody = "";
  }
  APICall.prototype.getHappyResponse = function() {
    var request = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?show-fields=body";
    var self = this;
    var temp = ""
    $.get(request, function (response){
      responseNewsBody = response.response.content.fields.body;
      console.log(responseNewsBody);
      self.newsBody = responseNewsBody;
      exports.document.getElementById('app').innerHTML = self.newsBody;
    });
  };
exports.APICall = APICall;
})(this);
