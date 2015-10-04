var http = require('http');

var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
    if(request.method == 'POST') return;
    var convertedDate = processRequest(request);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(convertedDate));
}).listen(port);

var dispachers = {
  '/api/parsetime' : function (isoTime) {
    var date = new Date(isoTime);
    return {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
  },
  '/api/unixtime' : function (isoTime) {
    var unixtime = new Date(isoTime).getTime();
    return {
      'unixtime' : unixtime
      }
  }
}

function processRequest(request) {
  var parsedUrl = url.parse(request.url);
  return dispachers[parsedUrl.pathname](parsedUrl.query.split('=')[1]);
}
