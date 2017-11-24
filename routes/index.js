var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: '바이러스 네트워킹 프로그램' });
});

/* make route to board-admin page */
router.get('/board', function(req, res, next) {
  res.render('pages/board', { title: '바이러스 네트워킹 프로그램' });
});

/* make route to board-admin page */
router.get('/board-admin', function(req, res, next) {
  res.render('pages/board-admin', { title: '바이러스 네트워킹 프로그램' });
});

module.exports = router;
