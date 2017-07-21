var port = process.argv[2];
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request,response){
    if (request.method == 'POST')
    {
        request.on('data', function(data){
           response.write(data.toString().toUpperCase()); 
        });
        request.on('end', function(){
           response.end(); 
        });
    }
});

server.listen(port);