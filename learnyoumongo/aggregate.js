var mongo = require('mongodb').MongoClient
var dbname = "learnyoumongo";
var collectionname = "prices";
var size = process.argv[2];


mongo.connect("mongodb://localhost:27017/"+dbname, function(err, db){
    if (err) throw err
    db.collection(collectionname).aggregate([ 
        { $match: { size: size } } 
        , { $group:  {
            _id: 'average',
            average: {
             $avg : '$price'  
            }
            }}
        ]).toArray( function(err, data){
        if (err) throw err
        console.log(data[0].average.toFixed(2));
        db.close();
        });
    });