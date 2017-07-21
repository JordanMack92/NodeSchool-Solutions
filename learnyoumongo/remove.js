var mongo = require('mongodb').MongoClient
var dbname = process.argv[2];
var collectionname = process.argv[3];
var id = process.argv[4];


mongo.connect("mongodb://localhost:27017/"+dbname, function(err, db){
    if (err) throw err
    db.collection(collectionname).remove( { _id: id }, function(err, data){
        if (err) throw err
        db.close();
    } );
    
});