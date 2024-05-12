const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"user",
        required: [true, 'ID 未填寫']
    },
    content: {
      type: String,
      required: [true, 'Content未填寫']
    },
   
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },{
    versionKey:false
  }
);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
