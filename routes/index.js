var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.all('/pass', function(req, res) {
	console.log(req.body);
  res.send(200, 'success');
});

module.exports = router;
