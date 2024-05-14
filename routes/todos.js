var express = require('express');
var router = express.Router();

//讀取清單
router.get('/', function (req, res, next) {

    /*
        #swagger.tags =  ['待辦事項']
        #swagger.path = '/todos/{id}'
        #swagger.method = 'get'
        #swagger.description = '讀取待辦清單'
        #swagger.summary = '讀取待辦清單'
        #swagger.produces = ["application/json"]
        #swagger.security = [{'BearerAuth': []}]
    */
    /*
      
        #swagger.responses[200] = { 
            schema: {
                "status": true,
                "message": "",
                "todos":[
                    {
                        status:false,
                        content:"API文件"
                    },
                    {
                        status:true,
                        content:"Model建立"
                    },
                ]
            }
        } 
        #swagger.responses[400] = { 
            schema: {
                "status": false,
                "message": "使用者不存在",
            }
            } 
        */
    res.send('respond sign_up');
});
//新增代辦
router.post('/', function (req, res, next) {

    /*
       #swagger.tags =  ['待辦事項']
       #swagger.path = '/todos'
       #swagger.method = 'post'
       #swagger.description = '新增代辦清單'
       #swagger.summary = '新增代辦清單'
       #swagger.produces = ["application/json"]
       #swagger.security = [{'BearerAuth': []}]
   */
    /*
         #swagger.parameters['data'] = {
             in: 'body',
             required: true,
              schema:{
                        content:"JWT建立"
               },
         }
         #swagger.responses[200] = { 
             schema: {
                 "status": true,
                 "message": "新增成功!",
             }
         } 
         #swagger.responses[400] = { 
             schema: {
                 "status": false,
                 "message": "Content未填寫!",
             }
             } 
         */

    res.send('respond sign_in');
});
//修改代辦
router.put('/{id}', function (req, res, next) {

    /*
       #swagger.tags =  ['待辦事項']
       #swagger.path = '/todos/{id}'
       #swagger.method = 'put'
       #swagger.description = '修改代辦清單'
       #swagger.summary = '修改代辦清單'
       #swagger.produces = ["application/json"]
               #swagger.security = [{'BearerAuth': []}]
   */
    /*
        #swagger.parameters['id'] = {
                in: 'path',
                required: true,
               description:"待辦事項ID"
            }
         #swagger.parameters['data'] = {
             in: 'body',
             required: true,
              schema: {
               "message": "更新app.js!",
              }
         }
         #swagger.responses[200] = { 
             schema: {
                 "status": true,
                 "message": "新增成功!",
             }
         } 
         #swagger.responses[400] = { 
             schema: {
                 "status": false,
                 "message": "Content未填寫",
             }
             } 
         */
    res.send('respond sign_out');
});
//刪除代辦
router.delete('/{id}', function (req, res, next) {
    /*
       #swagger.tags =  ['待辦事項']
       #swagger.path = '/todos/{id}'
       #swagger.method = 'delete'
       #swagger.description = '刪除代辦清單'
       #swagger.summary = '刪除代辦清單'
       #swagger.produces = ["application/json"]
               #swagger.security = [{'BearerAuth': []}]
   */
    /*
         #swagger.parameters['id'] = {
             in: 'path',
             required: true,
             description: "待辦事項ID"
             
         }
         #swagger.responses[200] = { 
             schema: {
                 "status": true,
                 "message": "刪除成功!",
             }
         } 
         #swagger.responses[400] = { 
             schema: {
                 "status": false,
                 "message": "找不到ID內容",
             }
             } 
         */

    res.send('respond checkout');
});
//設定待辦完成
router.patch('/{id}/toggle', function (req, res, next) {
    /*
       #swagger.tags =  ['待辦事項']
       #swagger.path = '/todos/{id}'
       #swagger.method = 'patch'
       #swagger.description = '設定待辦完成'
       #swagger.summary = '設定待辦完成'
       #swagger.produces = ["application/json"]
               #swagger.security = [{'BearerAuth': []}]
   */
    /*
         #swagger.parameters['id'] = {
             in: 'body',
             required: true,
            description:"待辦ID"
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
                 "message": "ID不存在",
             }
             } 
         */

    res.send('respond checkout');
});

module.exports = router;
