var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var filePath = process.argv[3];

var server = http.createServer(function (request, response) {
  var readStream = fs.createReadStream(filePath);
  readStream.on('open', function () {
    readStream.pipe(response);
  });
  readStream.on('error', function(err) {
    response.end(err);
  });
}).listen(port);
