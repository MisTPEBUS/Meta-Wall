const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name未填寫']
    },
    email: {
      type: String,
      required: [true, 'Email未填寫'],
      unique: true,
      lowercase: true,
      select: false
    },
    password:{
      type: String,
      required: [true,'password未填寫'],
      minlength: 8,
      select: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false
    }
  });
// User
const User = mongoose.model('user', userSchema);

module.exports = User;