var bl = require('bl');
var http = require('http');
var i = 2;


var callback = function(response){
    response.pipe(bl(function(err, data){
        if(err) {console.log(err);}
        data = data.toString();
        console.log(data);
        i++;
    if (i< process.argv.length) {
        myLoop(i);
    }
    }));
};

function myLoop(i){
    http.get(process.argv[i], callback);
    
}

myLoop(2);