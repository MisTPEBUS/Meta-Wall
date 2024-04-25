var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');
const mongoose = require('mongoose');
var app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const constr = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
console.log(constr)
mongoose.set('strictQuery', false);

mongoose.connect(constr)
    .then(res => console.log("連線資料成功"));


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api/posts', postRouter);

module.exports = app;
