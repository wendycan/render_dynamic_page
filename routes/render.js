var express = require('express');
var router = express.Router();
var request = require('request');
var phantom = require('phantom');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open(req.query.url, function (status) {
        console.log(status);
        page.render('test.png');
        // console.log(page.plainText);
      });
    });
  });
  // request('http://localhost:3000' + req.query.url, function (error, response, body) {
  //   res.send(body);
  // });
});

module.exports = router;
