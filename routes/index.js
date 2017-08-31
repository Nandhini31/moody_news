var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moody News', stories: "Stories will show here" });
});

module.exports = router;
