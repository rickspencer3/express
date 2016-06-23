var express = require('express');
var router = express.Router();

console.log('configuring MongoDB: ' + process.env.DATABASE_URL)

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL configured in your docker-compose.yml file
var url = process.env.DATABASE_URL



http://192.168.99.100:3000/api/
router.get('/', function(req, res, next) {
  res.send('respond with a structure regarding the api');
});

http://192.168.99.100:3000/api/foods
router.get('/foods', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

     if(!req.query.search) {

       res.send(db.find())
     }
     else {
       res.send({results:{term:req.query.search,foods:[]}})
     }
     db.close();
   });
});

//http://192.168.99.100:3000/api/foods/1234
router.get('/foods/:id', function(req, res, next) {
  res.send({food:{id:req.params.id}})
});

router.get('/foods/:search', function(req, res, next) {
   res.send({search:req.params.search})
});

module.exports = router;
