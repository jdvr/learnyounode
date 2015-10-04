var net = require('net');


var port = process.argv[2];

var server = net.createServer(function (socket) {
  socket.write(currentFormmatedDate() + '\n');
  socket.end();
});

server.listen(port);


function currentFormmatedDate() {
  var date = new Date();
  return date.getFullYear() + '-' + parseMonth(date.getMonth()) + "-"  + parseDay(date.getDate()) + " " + date.getHours()+":"+date.getMinutes() ;
}

function parseDay(day) {
  return day < 10 ? '0' + day : day;
}

function parseMonth(month) {
  var realMonth = month + 1;
  return realMonth < 10 ? '0' + realMonth : realMonth;
}
