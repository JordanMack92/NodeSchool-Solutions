var mymodule = require('./mymodule.js');
var path = process.argv[2];
var ext = process.argv[3];

var callback = function(err, files){
    if (err){return console.log("error");}
    
    else 
    {
        for(var file in files)
        {
        console.log(files[file]);
        }
    }
};

mymodule(path, ext, callback);
