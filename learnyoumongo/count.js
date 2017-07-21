var mongo = require('mongodb').MongoClient
var dbname = "learnyoumongo";
var collectionname = "parrots";


mongo.connect("mongodb://localhost:27017/"+dbname, function(err, db){
    if (err) throw err
    db.collection(collectionname).count( { age: { $gt: parseInt(process.argv[2]) } }, function(err, data){
        if (err) throw err
        console.log(data);
        db.close();
        
    } );
    
});