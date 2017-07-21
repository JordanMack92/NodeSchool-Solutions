var mongo = require('mongodb').MongoClient
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
   if(err) {console.log(err)}
   db.collection("parrots").find( { age: { $gt: parseInt(process.argv[2]) } }, {  _id:0 } ).toArray(function(err,parrot){
   if(err) {console.log(err)}
   console.log(parrot);
   db.close();
   });
});