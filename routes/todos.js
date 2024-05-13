var express = require('express');
var router = express.Router();

//讀取清單
router.post('/', function(req, res, next) {
    res.send('respond sign_up');
  });
  //新增代辦
  router.post('/sign_in', function(req, res, next) {
    res.send('respond sign_in');
  });
  //修改代辦
  router.post('/sign_out', function(req, res, next) {
    res.send('respond sign_out');
  });
  //刪除代辦
  router.get('/checkout', function(req, res, next) {
    res.send('respond checkout');
  });
  //識別代辦完成
  router.get('/checkout', function(req, res, next) {
    res.send('respond checkout');
  });

module.exports = router;
