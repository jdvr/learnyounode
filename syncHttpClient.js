var http = require('http');

var urls = [process.argv[2],
            process.argv[3],
            process.argv[4]];

var responses = [];

for (var i = 0; i < urls.length; i++) {
  makeRequestFor(urls[i], i);
}

function makeRequestFor(url, pos) {
  http.get(url, function(response){
      response.setEncoding('utf8');
      var completeResponse = '';
      response.on('data', function(chunk){
          completeResponse += chunk;
      });
      response.on('end', function(){
        store(completeResponse, pos);
        printResponses();
      });
      response.on('error', console.error)

  })
}


function store(response, pos) {
  responses[pos] = response;
}


function printResponses () {
    if (responses.length == urls.length){
      for (var i = 0; i < responses.length; i++) {
        console.log(responses[i]);
      }
    }
}
