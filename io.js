var filesystem = require('fs');

var data = filesystem.readFileSync(process.argv[2]);

var newLines = data.toString().split('\n');

var newLinesCount = newLines.length > 1 ? newLines.length - 1 : 0;

console.log(newLinesCount);
