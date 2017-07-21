var bl = require('bl');
var http = require('http');

var callback = function(response){
    response.pipe(bl(function (err, data){
        if(err){console.log(err);}
        data = data.toString();
        console.log(data.split("").length);
        console.log(data);
    }));
};




http.get(process.argv[2], callback);