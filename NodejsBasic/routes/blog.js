var express = require('express');
const { render } = require('ejs');
var router = express.Router();
const { body, validationResult } = require('express-validator');

/* GET users listing. */
  router.get('/', function(req, res, next) {
    res.render('blog');
  });

  router.get('/add', function(req, res, next) {
    res.render('addblog');
  });

  router.post('/add',[
    body("name","Please Input your blog name").not().isEmpty(),
    body("description","Please Input your blog drsccription").not().isEmpty(),
    body("author","Please Input your blog author").not().isEmpty(),
  ], function(req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    if (!errors.isEmpty()) {
      res.render('addblog',{errors:errors});
    }else{
      //insert to db
    }
  });

  router.get('/read', function(req, res, next) {
    res.render('readblog');
  });

  module.exports = router;