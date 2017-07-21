var mongo = require('mongodb').MongoClient
var json = {
       firstName : process.argv[2],
       lastName : process.argv[3]
   }
   
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
   if(err) throw err
   
   
   db.collection('docs').insert( json , function(err,data){
       if (err) throw err
       console.log(JSON.stringify(json));
       db.close();
   });
   
   
});