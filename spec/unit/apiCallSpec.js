describe("APICall", function(){


  it("should resturn a html from guardian", function(){
    var mockObject = {};
    var apiCall = new APICall(mockObject);

    apiCall.getHappyResponse();
    console.log(mockObject.innerHTML)
    expect(mockObject.innerHTML.include("Why is everyone talking about Venetian royalty?")).toBeTruthy();
  });
});
