var http = require('http');

var server = http.createServer(function(request,response){
    if (request.method == 'GET')
    {
        if (request.url.match("parsetime"))
        {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var date = new Date(request.url.split("=")[1]);
            var json = { 
                "hour" : date.getHours(),
                "minute" : date.getMinutes(),
                "second" : date.getSeconds()
            };
            response.end(JSON.stringify(json));
        }
        if (request.url.match("unixtime"))
        {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var date = new Date(request.url.split("=")[1]);
            var json = { "unixtime": date.getTime() };
            response.write(JSON.stringify(json));
            response.end();
        }
    }
});

server.listen(process.argv[2]);