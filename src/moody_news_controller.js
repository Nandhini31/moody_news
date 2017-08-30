$("#happy").click(function(){
  var api = new APICall();
  var newsBody = api.getHappyResponse();
  });

$("#sad").click(function(){
  var api = new APICall();
  var newsBody = api.getSadResponse();
});
