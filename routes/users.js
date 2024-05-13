var express = require('express');
var router = express.Router();

//註冊
router.post('/sign_up', function (req, res, next) {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = 'api/sign_up'
    #swagger.method = 'post'
    #swagger.summary='會員註冊'
    #swagger.description = '會員註冊'
    #swagger.produces = ["application/json"] 
  */
  /*
   #swagger.parameters['data'] = {
     in: 'body',
     required: true,
     schema: {
        "username": "example@test.com",
        "password": "example"
     }
   }
   #swagger.responses[200] = { 
     schema: {
         "status": true,
         "message": "註冊成功",
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "欄位未填寫正確",
       }
     } 
  */
  res.send('respond sign_up');
});
//登入
router.post('/sign_in', function (req, res, next) {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = 'api/sign_in'
    #swagger.method = 'post'
    #swagger.summary='會員登入'
    #swagger.description = '會員登入'
    #swagger.produces = ["application/json"] 
  */
  /*
   #swagger.parameters['data'] = {
     in: 'body',
     required: true,
     schema: {
        "username": "example@test.com",
        "password": "example"
     }
   }
   #swagger.responses[200] = { 
     schema: {
          "status": true,
          "message": "登入成功",
          "uid": "5fOCKiwA08gUGBiPy8Pr0983SS62",
          "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUc....",
          "expired": 1716013181463
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "",
       }
     } 
  */
  res.send('respond sign_in');
});
//登出
router.post('/sign_out', function (req, res, next) {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = 'api/sign_out'
    #swagger.method = 'post'
    #swagger.summary='會員登出'
    #swagger.description = '會員登出'
    #swagger.produces = ["application/json"] 
  */
  /*
   #swagger.parameters['Data'] = {
     in: 'body',
     description: 'Todo 內容',
     required: true,
     schema: {
       "content": "這是待辦標題",
     }
   }
   #swagger.responses[200] = { 
     schema: {
         "status": true,
         "message": "",
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "",
       }
     } 
  */
  res.send('respond sign_out');
});
//驗證

router.get('/users/checkout', function (req, res, next) {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = 'api/users/checkout'
    #swagger.method = 'post'
    #swagger.summary='使用者身分驗證'
    #swagger.description = '使用者身分驗證'
    #swagger.produces = ["application/json"] 
  */
  /*
   #swagger.responses[200] = { 
     schema: {
         "status": true,
         "message": "",
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "請重新登入!",
       }
     } 
  */
  res.send('respond with a resource');
});



module.exports = router;
