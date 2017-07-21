var fs = require('fs');

module.exports = function(path, ext, callback) {
    fs.readdir(path, function(err, files){
        if(err) {return callback(err);}
    for (var i = files.length - 1; i >= 0; i--)
    {
        if (files[i].split(".")[1] != ext)
        {
            files.splice(i,1);
        }
    }
    return callback(null, files);
    });
};
