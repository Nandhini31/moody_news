const Browser = require('zombie');
const app = require('../app');
const http = require('http');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User clicks sad button', function() {

  const browser = new Browser();

  before(function() {
    this.server = http.createServer(app).listen(3000);
    return browser.visit('/');
  });

  describe('sad button', function() {

    before(function() {
      return browser.pressButton('#sad');
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see sad page', function() {
      browser.assert.text('title', 'Mood: Sad 😿');
    });

  });

  after(function(){
    this.server.close();
  });

});
