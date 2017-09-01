// var element = document.getElementById("app");
// var api = new APICall(element, $.get);

$("#happy.image-fluid").click(function(){
   window.location.href='/happy'
});

$("#sad.image-fluid").click(function(){
  window.location.href='/sad'
});

$("#neutral.image-fluid").click(function(){
  window.location.href='/neutral'
});
