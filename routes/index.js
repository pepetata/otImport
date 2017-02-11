var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   vat cats = getCategories();
  res.render('index', { title: 'Express' ,  maincat1: cats});
});



module.exports = router;
