// describe("APICall", function(){
//   var mockObject;
//   var apiCall;
//
//   var mockRequestMethod = function(url, callback) {
//     callback({
//       response: {
//         content: {
//           fields: {
//             body: "Hello!"
//           }
//         }
//       }
//     });
//   };
//
//   beforeEach(function(){
//     mockObject = {};
//     apiCall = new APICall(mockObject, mockRequestMethod);
//   });
//
//   it("should resturn a html from guardian", function(){
//     apiCall.getHappyResponse();
//     console.log(mockObject.innerHTML);
//     expect(mockObject.innerHTML).toEqual("Hello!");
//   });
//
// });
//
// function APICall(listStoriesMethod) {
//   this.listStoriesMethod = listStoriesMethod;
// }
//
// APICall.prototype.call = function() {
//   this.listStoriesMethod();
// };
