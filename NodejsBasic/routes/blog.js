var express = require('express');
const { render } = require('ejs');
var router = express.Router();
const monk = require('monk');
const { body, validationResult } = require('express-validator');
const url = 'localhost:27017/TutorailDB';
const db = monk(url);

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
    if (!result.isEmpty()) {
      res.render('addblog',{errors:errors});
    }else{
      //insert to db
      var ct=db.get('blogs');
      ct.insert({
        name:req.body.name,
        descriptiob:req.body.description,
        author:req.body.author
      },function(err,blog){
        if(err){
          res.send(err);
        }else{
          res.location('/blog/add');
          res.redirect('/blog/add');
        }
      })
    }
  });

  router.get('/read', function(req, res, next) {
    res.render('readblog');
  });

  module.exports = router;