var express = require('express');
var router = express.Router();
var phantom = require('phantom');

/* GET users listing. */
router.get('/', function(req, res, next) {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(req.query.url, function (status) {
        page.render('demo.png');
        page.evaluate(function(){
          var result = document.getElementsByTagName('html')[0].outerHTML;
          result = result.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
          result = result.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");
          return result;
        }, function(result){
          res.send(result);
        });
      });
    });
  });
});

module.exports = router;
