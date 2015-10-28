var express = require('express');
var router = express.Router();
var phantom = require('phantom');
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(req.query.url, function (status) {
        page.render('demo.png');
        page.evaluate(function(){
          var result = document.getElementsByTagName('html')[0].outerHTML;
          result = result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
          return result;
        }, function(result){
          res.send(result);
        });
      });
    });
  });
});

router.get('/nop', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  request(req.query.url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(body);
  }
})
});

module.exports = router;
