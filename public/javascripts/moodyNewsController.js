
var element = document.getElementById("app");
var api = new APICall(element, $.get);

$("#happy").click(function(){
  var newsBody = api.getHappyResponse();
});

$("#sad").click(function(){
  var newsBody = api.getSadResponse();
});
