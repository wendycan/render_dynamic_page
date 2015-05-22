var express = require('express');
var router = express.Router();
var app = require('express')();
var request = require('request');

var needRender = function (req) {
  console.log(req.headers['user-agent']);
  return false;
}

router.get('/', function(req, res, next) {  
  if (needRender(req)) {
    request('http://localhost:3000/render?url=' + req.originalUrl, function (error, response, body) {
      res.send(body);
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});


module.exports = router;
