var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,  maincat1: ['cat1','cat1a','cat1b']});
});

module.exports = router;
