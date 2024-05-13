var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    // 記錄重大錯誤，等到服務都處理完後，停掉該 process
    console.error('Uncaughted Exception！')
    console.error(err);
    process.exit(1);
  });

dotenv.config({path: './config.env'});

//mongoose
const constr = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

mongoose.set('strictQuery', false);
mongoose.connect(constr)
    .then(res => console.log("連線資料成功"));

//swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json') // 剛剛輸出的 JSON
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/todos', todosRouter);
app.use('/api/', usersRouter);

//route 404 
app.use(function (req, res, next) {
    res.status(404).json({
      status: 'error',
      message: "查無此路由，請確認API格式!",
    });
  });

  //  catch none error 
process.on('unhandledRejection', (reason, promise) => {
    console.error('未捕捉到的 rejection：', promise, '原因：', reason);
  });

module.exports = app;
