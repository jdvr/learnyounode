var filesystem = require('fs');

filesystem.readFile(process.argv[2], function (err, fileData) {
  if(err) {
    console.log(0)
    return;
  }
var newLinesCount = fileData.toString().split('\n').length - 1;  
console.log(newLinesCount);
});
