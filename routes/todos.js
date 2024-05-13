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
        #swagger.parameters['id'] = {
            in: 'path',
            required: true,
        }
        #swagger.responses[200] = { 
            schema: {
                "status": true,
                "message": "",
                "todos":[
                    {
                        
                    }
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
              schema: {
                "name": "Lobinda",
                "email": "example@test.com",
                "password": "example"
              }
         }
         #swagger.responses[200] = { 
             schema: {
                 "status": true,
                 "message": "",
                 "todos":[
                     {
                         
                     }
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
                 "message": "",
                 "todos":[
                     {
                         
                     }
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
                 "message": "",
                 "todos":[
                     {
                         
                     }
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
                 "message": "",
                 "todos":[
                     {
                         
                     }
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
    
    res.send('respond checkout');
});

module.exports = router;
