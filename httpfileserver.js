var fs = require('fs');
//var net = require('net');
var http = require('http');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response){
   //var resposne = file;
   var stream = fs.createReadStream(file);
   stream.pipe(response);
});

server.listen(port);