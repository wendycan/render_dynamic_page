var express = require('express');
var router = express.Router();
var request = require('request');
var phantom = require('phantom');

/* GET users listing. */
router.get('/', function(req, res, next) {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(req.query.url, function (status) {
        page.evaluate(function(){
          var result = document.getElementsByTagName('html')[0].outerHTML;
          result = result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
          result= result.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
        }, function(result){
          res.send(result));
        });
        // console.log(page.plainText);
      });
    });
  });
});

module.exports = router;
