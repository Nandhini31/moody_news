(function(exports){
  function DisplayController() {
  }
  DisplayController.prototype.update = function(html) {
    exports.document.getElementById('app').innerHTML = html;
  };
  exports.DisplayController = DisplayController;
})(this);
