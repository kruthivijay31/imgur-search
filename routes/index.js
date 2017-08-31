var express = require('express');
var https = require('https');
var router = express.Router();


var express = require('express');
var router = express.Router();

var imgur = require('../service/imgur');

/* Get Home Page*/
router.get('/', function (req, res) {
  res.render('index');
});

/*search algo to get the images from imgur using imgur service*/
router.get('/search/:q', function (req, res) {
  imgur.getImage(req.params.q, req.query.offset).then(function (ans) {
    res.json(ans);
  });
});

module.exports = router;
