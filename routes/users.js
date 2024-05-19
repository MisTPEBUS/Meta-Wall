var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const handleErrorAsync = require('../service/handleErrorAsync.js');
const validator = require('validator');
const User = require('../models/users');
const BlackList = require('../models/blackList');
const appError = require('../service/appError.js');
const { isAuth, blackListCheck, generateSendJWT } = require('../service/auth');


//註冊
router.post('/sign_up', handleErrorAsync(async (req, res, next) => {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = '/api/sign_up'
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
        "name": "Lobinda",
        "email": "example@test.com",
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
  console.log(req.body);
  let { name, email, password } = req.body;

  // Content cannot null
  if (!email) {
    return next(appError("400", "Email欄位不能為空值！", next));
  }
  if (!password) {
    return next(appError("400", "Password欄位不能為空值！", next));
  }

  if (!name) {
    return next(appError("400", "Name欄位不能為空值！", next));
  }

  // isEmail Type
  if (!validator.isEmail(email)) {
    return next(appError("400", "Email 格式不正確", next));
  }
  // find user

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return next(appError("409", "使用者已經註冊", next));
  }
  // pwd salt

  password = bcrypt.hash(password, 12);
  // 加密密碼
  password = await bcrypt.hash(req.body.password, 12);
  const newUser = await User.create({
    email,
    password,
    name
  });
  generateSendJWT(newUser, 201, res);
}));
//登入
router.post('/sign_in', handleErrorAsync(async (req, res, next) => {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = '/api/sign_in'
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
        "email": "example@test.com",
        "password": "example"
     }
   }
   #swagger.responses[200] = { 
     schema: 
       {
          "status": true,
           "user":
            {
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...",
              "name": "Lobinda"
            }
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "登入失敗",
       }
     } 
  */
  let { email, password } = req.body;

  // Content cannot null

  if (!email) {
    return next(appError("400", "Email欄位不能為空值！", next));
  }
  if (!password) {
    return next(appError("400", "Password欄位不能為空值！", next));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(appError("400", "使用者不存在", next));
  }

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    return next(appError(400, '您的密碼不正確', next));
  }
  generateSendJWT(user, 200, res);
}));
//登出
router.post('/sign_out', isAuth, handleErrorAsync(async (req, res, next) => {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = '/api/sign_out'
    #swagger.method = 'post'
    #swagger.summary='會員登出'
    #swagger.description = '會員登出(JWT要帶入header)'
    #swagger.produces = ["application/json"] 
    #swagger.security = [{'BearerAuth': []}]
  */
  /*
   #swagger.responses[200] = { 
     schema: {
         "status": true,
         "message": "會員登出",
       }
     } 
   #swagger.responses[400] = { 
     schema: {
         "status": false,
         "message": "處理異常",
       }
     } 
  */

  if (!req.user._id) {
    return next(appError("400", "Token格式異常！", next));
  }

  const isblackList = await BlackList.findOne({ token: req.user._id });
  console.log('req', isblackList);

    if (isblackList) {
      return next(appError("400", "使用者已經登出", next));
    }

    await BlackList
      .create({
        token: req.user._id
      });

  res.status(200).json({
    "status": true,
    "message": "會員登出",
  });
}));
//驗證

router.get('/checkout', isAuth, blackListCheck, handleErrorAsync(async (req, res, next) => {
  /*
    #swagger.tags =  ['使用者登入驗證']
    #swagger.path = '/api/users/checkout'
    #swagger.method = 'get'
    #swagger.summary='使用者身分驗證'
    #swagger.description = '使用者身分驗證(帶入header)'
    #swagger.produces = ["application/json"] 
    #swagger.security = [{'BearerAuth': []}]
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

  res.status(200).json({
    "status": true,
    "message": "",
  });
}));



module.exports = router;
