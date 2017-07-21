var http = require('http');



var callback = function(response){
    response.setEncoding('utf8');
    response.on("data", function(data){
        console.log(data);
    });
};

http.get(process.argv[2], callback);