var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
  response.on('error', console.error);
  response.pipe(bl(function (err, data) {
    if(err) return console.error(err);

    console.log(data.toString().length);

    console.log(data.toString());

  }))
});
