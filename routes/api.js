var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a structure regarding the api');
});

router.get('/foods', function(req, res, next) {
   res.send({foods:[]})
});
router.get('/foods/:search', function(req, res, next) {
   res.send({search:req.params.search})
});
router.get('/foods/id', function(req, res, next) {
  res.send({id:req.params.id})
});
module.exports = router;
