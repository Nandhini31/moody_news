const Browser = require('zombie');
const app = require('../app');
const http = require('http');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User clicks happy button', function() {

  const browser = new Browser();

  before(function() {
    this.server = http.createServer(app).listen(3000);
    return browser.visit('/');
  });

  describe('happy button', function() {

    before(function() {
      return browser.pressButton('#happy');
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('title', 'Mood: Happy 🙂');
    });

  });

  after(function(){
    this.server.close();
  });

});
