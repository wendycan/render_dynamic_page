var express = require('express');
var router = express.Router();
var app = require('express')();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
