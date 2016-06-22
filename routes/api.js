var express = require('express');
var router = express.Router();

http://192.168.99.100:3000/api/
router.get('/', function(req, res, next) {
  res.send('respond with a structure regarding the api');
});

http://192.168.99.100:3000/api/foods
router.get('/foods', function(req, res, next) {
   if(!req.query.search) {
     res.send({foods:[]})
   }
   else {
     res.send({results:{term:req.query.search,foods:[]}})
   }
});

//http://192.168.99.100:3000/api/foods/1234
router.get('/foods/:id', function(req, res, next) {
  res.send({food:{id:req.params.id}})
});

router.get('/foods/:search', function(req, res, next) {
   res.send({search:req.params.search})
});

module.exports = router;
