var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname);
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
console.log("Server is running on port 3000");
