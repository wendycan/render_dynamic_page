var express = require('express');
var router = express.Router();
var app = require('express')();
var request = require('request');
var crawlerUserAgents = [
  'googlebot',
  'yahoo',
  'bingbot',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkShare',
  'W3C_Validator',
  'curl/7.37.1'
];

var needRender = function (req) {
  if (crawlerUserAgents.indexOf(req.headers['user-agent']) == -1) {
    return false;
  } else {
    return true
  }
};

router.get('/', function(req, res, next) {
  if (needRender(req)) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    request('http://localhost:3000/render?url=' + fullUrl, function (error, response, body) {
      res.send(body);
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});


module.exports = router;
