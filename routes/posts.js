var express = require('express');


var router = express.Router();
const Post = require("../models/postsModel");

router.get('/', async function (req, res, next) {
  const { timeSort, keyWord } = req.query;
  
  //設定時間近到遠還是遠道近
  const tSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt"
  let query = {};

  //關鍵字針對Model中userName + content 搜尋
  if (keyWord) {
    query.$or = [
      { userName: new RegExp(keyWord, 'i') },
      { content: new RegExp(keyWord, 'i') }
    ];
  }

  try {
    const posts = await Post.find(query).populate('post').sort(tSort);
 
    res.status(200).json({
      success: true,
      message: "搜尋成功",
      posts: posts
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
      message: "查詢異常",
      errMsg: err.message
    })
  }
});

router.post('/', async function (req, res, next) {
  // query params
  console.log(req.body)
  try {
    const newPost = await Post.create(req.body);
    console.log(newPost)
    res.status(200).json({
      success: true,
      message: "已建立貼文",
      post: newPost
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
      message: "無法建立貼文",
      errMsg: err.message
    })
  }


});

module.exports = router;
