var express = require('express');
var router = express.Router();

/* GET home page. /jquery */
router.get('/', function(req, res, next) {
  res.render('jquery', { title: 'Jquery tutorial' });
});

module.exports = router;
