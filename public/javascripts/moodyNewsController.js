
var element = document.getElementById("app");
var api = new APICall(element, $.get);

$("#happy").click(function(){
   window.location.href='/happy'
});

$("#sad").click(function(){
  window.location.href='/sad'
});

$("#neutral").click(function(){
  window.location.href='/neutral'
});
