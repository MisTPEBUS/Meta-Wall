const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"user",
        select: false,
        required: [true, 'ID 未填寫']
    },
    content: {
      type: String,
      required: [true, 'Content未填寫']
    },
    status:{
        type: Boolean,
        default:false
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },{
    versionKey:false
  }
);
const Todo = mongoose.model('todo', postSchema);

module.exports = Todo;
