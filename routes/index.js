var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dolphin Cove' });
});

module.exports = router;
