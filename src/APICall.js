(function(exports){
  function APICall(){
   response = $.get("https://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?api-key=test&show-fields=body")
     console.log(response);
     console.log(JQuery.parseJSON(response.responseText));
  }
exports.APICall = APICall;
})(this)
