(function(exports){
  function ApiCall(apiInstance) {
    this.apiInstance = apiInstance;
  };

  ApiCall.prototype.call = function(opts, callback) {
    this.apiInstance.listStories(opts, callback);
  };

  exports.ApiCall = ApiCall;
})(this);
