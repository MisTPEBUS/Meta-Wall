var express = require('express');
var router = express.Router();
const Todo = require('../models/todos');
const handleErrorAsync = require('../service/handleErrorAsync.js');
const appError = require('../service/appError.js');
const { isAuth, blackListCheck, generateSendJWT } = require('../service/auth');

//讀取清單
router.get('/', isAuth, async function (req, res, next) {
    /*
        #swagger.tags =  ['待辦事項']
        #swagger.path = '/todos'
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

    /*  const post = await Todo.find(q).populate({
         path: 'user',
         select: 'name photo '
       }).populate({
         path: 'comments',
         select: 'comment user'
       }).sort(timeSort);
     // res.send('respond with a resource');
     res.status(200).json({
       post
     })       */


    const todos = await Todo.find({ user: req.user._id });

    console.log(todos);
    res.status(200).json({
        "status": true,
        "message": "",
        todos
    })
});
//新增代辦
router.post('/', isAuth, handleErrorAsync(async (req, res, next) => {


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

    const { content } = req.body;
    if (!content) {
        return next(appError(400, "你沒有填寫 content 資料", next))
    }

    console.log(req.user._id.toHexString())
    const newTodo = await Todo.create({
        user: req.user._id.toHexString(),
        content
    });
    res.status(200).json({
        "status": true,
        "message": "新增成功!",
    })
}));
//修改代辦
router.put('/:id', isAuth, handleErrorAsync(async (req, res, next) => {

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
                 "message": "修改成功!",
             }
         } 
         #swagger.responses[400] = { 
             schema: {
                 "status": false,
                 "message": "Content未填寫",
             }
             } 
         */

    if (!req.body.content) {
        return next(appError(400, "你沒有填寫 content 資料", next))
    }
    const updatedTodo = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
            user: req.user._id,
            content: req.body.content
        },
        { new: true }  // 返回更新后的文档
    );
    res.status(200).json({
        "status": true,
        "message": "修改成功!",
        todo: updatedTodo
    })
}));
//刪除代辦
router.delete('/:id', isAuth, handleErrorAsync(async (req, res, next) => {
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

    
    const deleteTodo = await Todo.findByIdAndDelete(
        { _id: req.params.id },
        { new: true }  // 返回更新后的文档
    );
    res.status(200).json({
        "status": true,
        "message": "刪除成功!",
        todo: deleteTodo
    })
}));
//設定待辦完成
router.patch('/:id/toggle', isAuth, handleErrorAsync(async (req, res, next) => {
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

    let updatedTodo = await Todo.findById({ _id: req.params.id })
    updatedTodo.status = !updatedTodo.status
    updatedTodo = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
            user: req.user._id,
            status: updatedTodo.status
        },
        { new: true }  // 返回更新后的文档
    );
    res.status(200).json({
        "status": true,
        "message": "修改成功!",
        todo: updatedTodo
    })
}));

module.exports = router;
