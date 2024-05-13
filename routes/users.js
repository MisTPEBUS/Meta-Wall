var express = require('express');
var router = express.Router();

//註冊
router.post('/sign_up', function(req, res, next) {
  res.send('respond sign_up');
});
//登入
router.post('/sign_in', function(req, res, next) {
  res.send('respond sign_in');
});
//登出
router.post('/sign_out', function(req, res, next) {
  res.send('respond sign_out');
});
//驗證
router.get('/checkout', function(req, res, next) {
  res.send('respond checkout');
});



module.exports = router;
