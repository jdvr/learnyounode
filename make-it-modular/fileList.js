
module.exports = function (dirName, fileExtension, callback) {
  var filesystem = require('fs');

  var path = require('path');

  var extension = '.' + fileExtension;

  var filteredFileList = [];

  filesystem.readdir(dirName, function (err, fileList) {
    if(err)
      return callback(err);

    for(var i = 0; i < fileList.length; i++){
      if (path.extname(fileList[i]) == extension)
        filteredFileList.push(fileList[i]);
    }

    callback(null, filteredFileList);

  });
}
