var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: '실시간 모의 투자 시스템' });
});

/* make route to board page */
router.get('/board', function(req, res, next) {
  res.render('pages/board', { title: '실시간 모의 투자 시스템' });
});

module.exports = router;
