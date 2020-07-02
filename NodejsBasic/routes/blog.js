var express = require('express');
const { render } = require('ejs');
var router = express.Router();

/* GET users listing. */
  router.get('/', function(req, res, next) {
    res.render('blog');
  });

  router.get('/add', function(req, res, next) {
    res.render('addblog');
  });

  router.get('/read', function(req, res, next) {
    res.render('readblog');
  });

  module.exports = router;