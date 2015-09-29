var fileList = require('./fileList');

var dirPath = process.argv[2];

var extension = process.argv[3];


fileList(dirPath, extension, function (err, filteredFileList) {
  if(err)
    return;

  for(var i = 0; i < filteredFileList.length; i++)
    console.log(filteredFileList[i]);

});
