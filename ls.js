var filesystem = require('fs');

var path = require('path');

var dirPath = process.argv[2];

var extension = '.' + process.argv[3];

filesystem.readdir(dirPath, function (err, fileList) {
  if(err)
    return;

  for(var i = 0; i < fileList.length; i++){
    if (path.extname(fileList[i]) == extension)
      console.log(fileList[i]);
  }

});
